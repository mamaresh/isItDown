import StatusList from '../components/StatusList';
import Environments from '../constants/Environments';

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
        <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626030115105&to=1626116515105&panelId=4"
          width="450"
          height="200"
          frameBorder="0">
        </iframe>
<<<<<<< HEAD
        <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040021692&to=1626126421692&panelId=1" 
          width="450" 
          height="200" 
          frameBorder="0">
        </iframe>
        <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626039931877&to=1626126331877&panelId=15" 
          width="450" 
          height="200" 
          frameBorder="0">
        </iframe>
        <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040050054&to=1626126450054&panelId=10" 
          width="450" 
          height="200" 
          frameBorder="0">
        </iframe>
        <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040293887&to=1626126693887&panelId=16" 
          width="450" 
          height="200" 
          frameBorder="0">
        </iframe>
        <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040306405&to=1626126706405&panelId=13" 
          width="450" 
          height="200" 
          frameBorder="0">
=======
        <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040021692&to=1626126421692&panelId=1"
          width="450"
          height="200"
          frameborder="0">
        </iframe>
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
        <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040293887&to=1626126693887&panelId=16"
          width="450"
          height="200"
          frameborder="0">
        </iframe>
        <iframe src="https://stats.redfintest.com/grafana/d-solo/000000648/ops-test-uptime?orgId=2&from=1626040306405&to=1626126706405&panelId=13"
          width="450"
          height="200"
          frameborder="0">
>>>>>>> 6006af509f9940e50f45dedcaff054160c3c8a78
        </iframe>
      </main>
    </div>
    )
}
