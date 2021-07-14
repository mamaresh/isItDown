import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ActionStatus from './ActionStatus';
import TextArea from './TextArea';
import GrafanaGraphs from './GrafanaGraphs';
import Description from './Description';

const EnvInfoRow = (
    {
        descriptionPanel,
        graphPanel
    }) => {
        return (
            <Container>
                <Row>
                    <Col sm={8}>
                      {descriptionPanel ? <GrafanaGraphs descriptionPanel={descriptionPanel} graphPanel={graphPanel}/> : <Description />}
                    </Col>
                    <Col sm={4}>
                      <ActionStatus />
                      <TextArea />
                    </Col>
              </Row>
          </Container>
    )
}

export default EnvInfoRow;


