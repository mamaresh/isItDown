import Environments from '../constants/Environments';
import EnvInfoRowList from '../components/EnvInfoRowList';

export default function Home() {
    return (
      <div className="container">
      <main>
            <h1 className="title">
              Prod Status Page
            </h1>
            <EnvInfoRowList environment = {Environments.PROD} />
        </main>
    </div>
    )
}
