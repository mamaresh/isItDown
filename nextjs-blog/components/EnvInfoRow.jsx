import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ActionStatus from './ActionStatus';
import TextArea from './TextArea';

const GRAFANA_DASHBOARD_PREFIX = "https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040306405&to=1626126706405&panelId=";

const EnvInfoRow = (
    {
        descriptionPanel,
        graphPanel
    }) => {
        return (
            <Container>
                <Row>
                    <Col sm={8}>
                        <iframe src={GRAFANA_DASHBOARD_PREFIX + descriptionPanel}
                          width="450"
                          height="200"
                          frameBorder="0">
                        </iframe>
                        <iframe src={GRAFANA_DASHBOARD_PREFIX + graphPanel}
                          width="450"
                          height="200"
                          frameborder="0">
                        </iframe>
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


