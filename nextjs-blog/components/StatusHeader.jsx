import React from 'react';
import useHealthCheck from '../hooks/useHealthCheck';
import HEALTH from '../constants/Health';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FcCheckmark, FcMediumPriority, FcHighPriority } from 'react-icons/fc';
import { VscLoading } from 'react-icons/vsc';

export default function StatusHeader({
  name,
  url,
}) {
  const health = useHealthCheck(url);
  const size = 24;
  let healthIcon;
  switch (health) {
    case HEALTH.UP:
      healthIcon = <FcCheckmark size={size}/>;
      break;
    case HEALTH.PARTIAL_DOWN:
      healthIcon = <FcMediumPriority size={size} />;
      break;
    case HEALTH.DOWN:
      healthIcon = <FcHighPriority size={size} />;
      break;
    default:
      healthIcon = <VscLoading size={size} />;
  }

  return (
    <Container fluid>
      <Row noGutters>
        <Col xs={11}>{name}</Col>
        <Col>{healthIcon}</Col>
      </Row>
    </Container>
  );
}
