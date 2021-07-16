import Head from 'next/head'
import { FcCheckmark, FcHighPriority, FcMediumPriority } from 'react-icons/fc';
import HEALTH from '../constants/Health';
import { VscLoading } from 'react-icons/vsc';
import EnvironmentDistroDetails from "../components/EnvironmentDistroDetails";
import HEALTH_CHECKS from '../constants/HealthChecks';
import useHealthCheck from '../hooks/useHealthCheck';
import Environments from '../constants/Environments';
import Alert from 'react-bootstrap/Alert'
import { useState } from 'react';

export default function Home() {
    const [showBanner, setShowBanner] = useState(true);
    const envData = addHealth({
        Trunk: { url: '/trunk', env: Environments.TRUNK },
        Release: { url: '/release', env: Environments.RELEASE },
        Newschema: { url: '/newschema', env: Environments.NEW_SCHEMA },
    });
    const size = 24;

    const  envCards = Object.keys(envData).map(key => {
      const health = envData[key].health;
      let healthIcon, cardClassName;
      switch (health) {
        case HEALTH.UP:
            cardClassName = "green";
            healthIcon = <FcCheckmark size={size}/>;
            break;
        case HEALTH.PARTIAL_DOWN:
            healthIcon = <FcMediumPriority size={size} />;
            cardClassName = "yellow";
            break;
        case HEALTH.DOWN:
            healthIcon = <FcHighPriority size={size} />;
            cardClassName = "red";
            break;
        default:
            healthIcon = <VscLoading size={size} />;
            cardClassName = "";
    }
    cardClassName += " card environments";
    
        return(
            <div className={cardClassName}>
                <a href={envData[key].url}><h3 className= "environmentName"> {key} &rarr;</h3></a>
                <p className="health">Health: {healthIcon}</p>
              <EnvironmentDistroDetails env={envData[key].env}/>
            </div>
        )
    })
  return (
    <div className="container">
      {showBanner && <Alert variant="warning" onClose={() => setShowBanner(false)} dismissible>
         <Alert.Heading>Browser And Environment Requirements </Alert.Heading>
         <p>
           Please make sure to use <b>Firefox</b> as your browser, sign in to your <b>Redfin account</b>, and
           use <b>chrome extension</b> if you want to check statuses for release and new schema.
         </p>
       </Alert>}
      <Head>
        <title>isItDown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          Status
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
