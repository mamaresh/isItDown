import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import EnvInfoRow from './EnvInfoRow';
import StatusHeader from './StatusHeader';
import HealthChecks from '../constants/HealthChecks';

const EnvInfoRowList = ({environment}) => (
    <Accordion>
      {Object.entries(HealthChecks).map(([service, rowInfo]) => {
          const key = environment + "_" + service;
          return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={key}>
                    <StatusHeader
                      name={service}
                      url={rowInfo.getUrl(environment)}
                    />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={key}>
                    <Card.Body>
                        <EnvInfoRow
                          key={key}
                          environment={environment}
                          service={service}
                          {...rowInfo}
                        />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
          );
      })}
    </Accordion>
)

export default EnvInfoRowList;