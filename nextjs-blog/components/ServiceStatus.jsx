import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ServiceStatusHeader from './ServiceStatusHeader';

const API_PREFIX = '/api/forwarder';

// Grabbed from https://redfin.atlassian.net/wiki/spaces/OPS/pages/583377711/Redfin+Service+Health+Checks
const HEALTH_CHECKS = {
  'Customer site': (env) => `${API_PREFIX}/${env}`,
  'Corvair': (env) => `${API_PREFIX}/${env}/r3s/system-status`,
  'Stingray': (env) => `${API_PREFIX}/${env}/stingray/do/system-status`,
  'Commerce': (env) => `${API_PREFIX}/${env}/tools/system-status`,
  'DSS': (env) => `${API_PREFIX}/${env}/documents-api/system-status`,
  'MWS': (env) => `${API_PREFIX}/${env}/mortgage-api/system-status`,
  'Title': (env) => `${API_PREFIX}/${env}/title-api/system-status`,
};

export default function ServiceStatus({ environment }) {
  return (
    <Accordion>
      {Object.entries(HEALTH_CHECKS).map(([name, getUrl]) => {
        const eventKey = `${environment}__${name}`;
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
              <ServiceStatusHeader name={name} url={getUrl(environment)} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey}>
              <Card.Body>Test body</Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
}
