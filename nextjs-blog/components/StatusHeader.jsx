import React from 'react';
import useHealthCheck from '../hooks/useHealthCheck';
import HEALTH from '../constants/Health';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FcCheckmark, FcHighPriority } from 'react-icons/fc';
import { VscLoading } from 'react-icons/vsc';
const MIN_PER_MILLIS = 60000;
const REFRESH_INTERVAL_IN_MILLIS = MIN_PER_MILLIS * 5;
export default function StatusHeader({
  name,
  url,
}) {
  const {health, lastUpdated} = useHealthCheck(url, REFRESH_INTERVAL_IN_MILLIS);

  let healthIcon;
  switch (health) {
    case HEALTH.UP:
      healthIcon = <FcCheckmark />;
      break;
    case HEALTH.DOWN:
      healthIcon = <FcHighPriority />;
      break;
    default:
      healthIcon = <VscLoading />;
  }

  const timeLeftInMins = lastUpdated/MIN_PER_MILLIS;
  const timeUnitToDisplay = timeLeftInMins === 1 ? "minute" : "minutes";
  return (
    <Container fluid>
      <Row noGutters>
        <Col xs={11}>{name}</Col>
        <Col>{healthIcon}</Col>
        <Col>Status updated {timeLeftInMins} {timeUnitToDisplay} ago</Col>
      </Row>
    </Container>
  );
}
