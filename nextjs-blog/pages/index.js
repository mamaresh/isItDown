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
                <p>Revision:
                    <a href={envData[key].link}>
                        {envData[key].commit}
                    </a>
                </p>
                <p>Health: {envData[key].health ?  <FcCheckmark /> : <FcHighPriority />}</p>
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
