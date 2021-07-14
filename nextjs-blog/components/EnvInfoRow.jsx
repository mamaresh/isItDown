import React from 'react';
import {Row, Col } from 'react-grid-system';
import ActionStatus from './ActionStatus';
import TextArea from './TextArea';
import Status from './Status';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const GRAFANA_DASHBOARD_PREFIX = "https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040306405&to=1626126706405&panelId=";

const EnvInfoRow = (
    {
        environment,
        service,
        getUrl,
        descriptionPanel,
        graphPanel
    }) => {
         console.log(environment);
        return (
            <Row>
                <Col sm={3}>
                  <Status name={service} url={getUrl(environment)} />
                </Col>
                <Col sm={6}>
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
                <Col sm={3}>
                  <ActionStatus />
                  <TextArea />
                </Col>
          </Row>
    )
}

export default EnvInfoRow;


