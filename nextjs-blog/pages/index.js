import Head from 'next/head'
import { FcCheckmark } from 'react-icons/fc';
import { FcHighPriority } from 'react-icons/fc';
import EnvironmentDistroDetails from "../components/EnvironmentDistroDetails";

export default function Home(props) {
    // TODO: update default value
    const {isTrunkHealthy = true, trunkRevisionCommit = "12345"} = props;
    const trunkRevisionLink = "https://stash.redfin.com/projects/RED/repos/main/commits/" + trunkRevisionCommit;

    // TODO: update data structure when necessary
    const envData = {
        Trunk: {
            url: '/trunk',
            env: 'trunk',
            health: isTrunkHealthy,
            commit: trunkRevisionCommit,
            link: trunkRevisionLink,
        },
        Release: {url: '/release', env: 'release', health: false, commit: "12345"},
        Newschema: {url: '/newschema', env: 'newschema', health: false, commit: "12345"},
        Prod: {url: '/prod', env: 'trunk', health: false, commit: "12345"},
    }

    const  envCards = Object.keys(envData).map(key => {
        return(
            <div className="card">
                <a href={envData[key].url}><h3> {key} &rarr;</h3></a>
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
