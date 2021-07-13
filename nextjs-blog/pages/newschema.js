import { Container, Row, Col } from 'react-grid-system';

export default function Home() {
    return (
        <div className="container">
    	<main>
		    <h1 className="title">
          newschema status page
        </h1>
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
              <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626112161763&to=1626198561763&panelId=21" width="450" height="200" frameborder="0"></iframe>
              <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626112173569&to=1626198573570&panelId=11" width="450" height="200" frameborder="0"></iframe>
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
              <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626112185612&to=1626198585612&panelId=22" width="450" height="200" frameborder="0"></iframe>
              <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626112198562&to=1626198598562&panelId=3" width="450" height="200" frameborder="0"></iframe>
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
