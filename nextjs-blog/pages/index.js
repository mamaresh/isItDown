import Head from 'next/head'
import { FcCheckmark, FcHighPriority, FcMediumPriority } from 'react-icons/fc';
import HEALTH from '../constants/Health';
import { VscLoading } from 'react-icons/vsc';
import EnvironmentDistroDetails from "../components/EnvironmentDistroDetails";

export default function Home(props) {
    // TODO: update default value
    const {trunkHealth = HEALTH.UP, trunkRevisionCommit = "12345"} = props;
    const trunkRevisionLink = "https://stash.redfin.com/projects/RED/repos/main/commits/" + trunkRevisionCommit;

    // TODO: update data structure when necessary
    const envData = {
        Trunk: {
            url: '/trunk',
            health: trunkHealth,
            commit: trunkRevisionCommit,
            link: trunkRevisionLink,
        },
        Release: {url: '/release', env: 'release', health: HEALTH.PARTIAL_DOWN, commit: "12345"},
        Newschema: {url: '/newschema', env: 'newschema', health: HEALTH.PARTIAL_DOWN, commit: "12345"},
        Prod: {url: '/prod', env: 'trunk', health: HEALTH.DOWN, commit: "12345"},
    }
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
                <p>Health: {healthIcon}</p>
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
          Status
        </h1>
        <div className="grid">
         {envCards}
        </div>
      </main>
    </div>
  )
}
