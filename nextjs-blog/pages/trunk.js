import StatusList from '../components/StatusList';
import Environments from '../constants/Environments';
import { Container, Row, Col } from 'react-grid-system';

export default function Home() {

    return (
        <div className="container">
    	<main>
		<h1 className="title">
          trunk status page
        </h1>
        <StatusList
          environment={Environments.TRUNK}
        />
        <Container>
          <Row>
            <Col sm={3}>
              <h3>Services</h3>
            </Col>
            <Col sm={6}>
              <h3>Graphs</h3>
            </Col>
            <Col sm={3}>
              <h3>Status</h3>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              Stingray
            </Col>
            <Col sm={6}>
            <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626030115105&to=1626116515105&panelId=4"
              width="450"
              height="200"
              frameBorder="0">
            </iframe>
            <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040021692&to=1626126421692&panelId=1"
              width="450"
              height="200"
              frameborder="0">
            </iframe>
            </Col>
            <Col sm={3}>
              Status
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              Agent Tools
            </Col>
            <Col sm={6}>
            <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626039931877&to=1626126331877&panelId=15"
              width="450"
              height="200"
              frameborder="0">
            </iframe>
            <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040050054&to=1626126450054&panelId=10"
              width="450"
              height="200"
              frameborder="0">
            </iframe>
            </Col>
            <Col sm={3}>
              Status
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              Mortgage
            </Col>
            <Col sm={6}>
            <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040293887&to=1626126693887&panelId=16"
              width="450"
              height="200"
              frameborder="0">
            </iframe>
            <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040306405&to=1626126706405&panelId=13"
              width="450"
              height="200"
              frameborder="0">
            </iframe>
            </Col>
            <Col sm={3}>
              Status
            </Col>
          </Row>
        </Container>
      </main>
    </div>
    )
}
