import React from 'react';

const GRAFANA_DASHBOARD_PREFIX = "https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040306405&to=1626126706405&panelId=";

export default function GrafanaGraphs({
    descriptionPanel,
    graphPanel
}) {
    return (<>
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
            </>
        );
}