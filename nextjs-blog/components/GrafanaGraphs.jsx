import React from 'react';

const GRAFANA_DASHBOARD_PREFIX = "https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&panelId=";

export default function GrafanaGraphs({
    descriptionPanel,
    graphPanel,
    environment
}) {
    return (<>
                <iframe src={GRAFANA_DASHBOARD_PREFIX + descriptionPanel[environment]}
                    width="450"
                    height="200"
                    frameBorder="0">
                </iframe>
                <iframe src={GRAFANA_DASHBOARD_PREFIX + graphPanel[environment]}
                    width="450"
                    height="200"
                    frameBorder="0">
                 </iframe>
            </>
        );
}