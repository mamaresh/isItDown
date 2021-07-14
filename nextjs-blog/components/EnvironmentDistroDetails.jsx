import React from 'react';
import parseDistroPage from '../hooks/parseDistroPage';
import Container from 'react-bootstrap/Container';

export default function EnvironmentDistroDetails({env}) {
  if (!env) {
    return null;
  }
  const health = parseDistroPage(env);

  return (
    <Container fluid>
      <div>{health}</div>
    </Container>
  );
}
