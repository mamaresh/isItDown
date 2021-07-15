import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ActionStatus from './ActionStatus';
import TextArea from './TextArea';
import Description from './Description';

const EnvInfoRow = ({
  descriptionPanel,
  graphPanel,
  environment,
}) => {
        return (
            <Container>
                <Row>
                    <Col sm={8}>
                      {descriptionPanel[environment] ? <GrafanaGraphs descriptionPanel={descriptionPanel} graphPanel={graphPanel} environment = {environment}/> : <Description />}
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


