import StatusList from '../components/StatusList';
import Environments from '../constants/Environments';
import { Container, Row, Col } from 'react-grid-system';
import ActionStatus from '../components/ActionStatus';
import EnvInfoRowList from '../components/EnvInfoRowList';

export default function Home() {

    const header = <Row>
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
    return (
        <div className="container">
    	    <main>
                <h1 className="title">
                  trunk status page
                </h1>
                <Container>
                    {header}
                    <EnvInfoRowList environment = {Environments.trunk} />
                </Container>
            </main>
        </div>
    )
}
