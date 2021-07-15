import Head from 'next/head'
import { FcCheckmark, FcHighPriority, FcMediumPriority } from 'react-icons/fc';
import HEALTH from '../constants/Health';
import { VscLoading } from 'react-icons/vsc';
import EnvironmentDistroDetails from "../components/EnvironmentDistroDetails";
import HEALTH_CHECKS from '../constants/HealthChecks';
import useHealthCheck from '../hooks/useHealthCheck';
import Environments from '../constants/Environments';

export default function Home() {
    const envData = addHealth({
        Trunk: { url: '/trunk', env: Environments.TRUNK },
        Release: { url: '/release', env: Environments.RELEASE },
        Newschema: { url: '/newschema', env: Environments.NEW_SCHEMA },
        // TODO: fix prod CORS errors or remove
        Prod: { url: '/prod', env: Environments.TRUNK },
    });
    const size = 24;

    const  envCards = Object.keys(envData).map(key => {
      const health = envData[key].health;
      let healthIcon;
      switch (health) {
        case HEALTH.UP:
          healthIcon = <FcCheckmark size={size}/>;
          break;
        case HEALTH.PARTIAL_DOWN:
          healthIcon = <FcMediumPriority size={size} />;
          break;
        case HEALTH.DOWN:
          healthIcon = <FcHighPriority size={size} />;
          break;
        default:
          healthIcon = <VscLoading size={size} />;
      }
        return(
            <div className="card">
                <a href={envData[key].url}><h3> {key} &rarr;</h3></a>
                <p>Health: {healthIcon}</p>
                {/*<p>Revision:*/}
                {/*    <a href={envData[key].link}>*/}
                {/*        {envData[key].commit}*/}
                {/*    </a>*/}
                {/*</p>*/}
              <EnvironmentDistroDetails env={envData[key].env}/>
            </div>
        )
    })
  return (
    <div className="container">
      <Head>
        <title>isItDown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          ok thanks
        </h1>
        <div className="grid">
         {envCards}
        </div>
      </main>
    </div>
  )
}

function addHealth(envData) {
  const envDataCopy = envData;
  Object.entries(envDataCopy).forEach(([key, { env }]) => {
    envDataCopy[key].health = getHealth(env);
  });
  return envDataCopy;
}

function getHealth(env) {
  const serviceHealth = Object.entries(HEALTH_CHECKS).map(([, { getUrl }]) => {
    const url = getUrl(env);
    const { health } = useHealthCheck(url);
    return health;
  });

  function makeHealthChecker(expectedHealth) {
    return (health) => health === expectedHealth;
  }

  const loading = serviceHealth.some(makeHealthChecker(HEALTH.LOADING));
  if (loading) {
    return HEALTH.LOADING;
  }

  const allServicesDown = serviceHealth.every(
    makeHealthChecker(HEALTH.DOWN));
  if (allServicesDown) {
    return HEALTH.DOWN;
  }

  const allServicesUp = serviceHealth.every(
    makeHealthChecker(HEALTH.UP));
  if (allServicesUp) {
    return HEALTH.UP;
  }

  return HEALTH.PARTIAL_DOWN;
}
