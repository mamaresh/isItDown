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
              Services
            </Col>
            <Col sm={6}>
              Graphs
            </Col>
            <Col sm={3}>
              Status
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

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    )
}
