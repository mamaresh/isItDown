import Head from 'next/head'
import { FcCheckmark } from 'react-icons/fc';
import { FcHighPriority } from 'react-icons/fc';

export default function Home(props) {
    // TODO: update default value
    const {isTrunkHealthy = true, trunkRevisionCommit = "12345"} = props;
    const trunkRevisionLink = "https://stash.redfin.com/projects/RED/repos/main/commits/" + trunkRevisionCommit;

    // TODO: update data structure when necessary
    const envData = {
        Trunk: {
            url: '/trunk',
            health: isTrunkHealthy,
            commit: trunkRevisionCommit,
            link: trunkRevisionLink,
        },
        Release: {url: '/release', health: false, commit: "12345"},
        Newschema: {url: '/newschema', health: false, commit: "12345"},
        Prod: {url: '/prod', health: false, commit: "12345"},
    }

    const  envCards = Object.keys(envData).map(key => {
        return(
            <div className="card">
                <a href={envData[key].url}><h3> {key} &rarr;</h3></a>
                <p>Health: {envData[key].health ?  <FcCheckmark /> : <FcHighPriority />}</p>
                <p>Revision:
                    <a href={envData[key].link}>
                        {envData[key].commit}
                    </a>
                </p>
                 <style jsx>{`.card {
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
                 `}</style>

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
          I love Jared
        </h1>
        <div className="grid">
         {envCards}
        </div>
      </main>
<<<<<<< HEAD
      
=======

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
>>>>>>> 6006af509f9940e50f45dedcaff054160c3c8a78
    </div>
  )
}
