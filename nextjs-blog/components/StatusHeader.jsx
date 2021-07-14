import React from 'react';
import useHealthCheck from '../hooks/useHealthCheck';
import HEALTH from '../constants/Health';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FcCheckmark, FcHighPriority } from 'react-icons/fc';
import { VscLoading } from 'react-icons/vsc';

export default function StatusHeader({
  name,
  url,
}) {
  const health = useHealthCheck(url);

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

  return (
    <Container fluid>
      <Row noGutters>
        <Col xs={11}>{name}</Col>
        <Col>{healthIcon}</Col>
      </Row>
    </Container>
  );
}
