import Head from 'next/head'

export default function Home() {
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
          <a href="/trunk" className="card">
            <h3>Trunk &rarr;</h3>
            <p>Is trunk down or not?</p>
          </a>

          <a href="/newschema" className="card">
            <h3>Newschema &rarr;</h3>
            <p>Is newschema down or not?</p>
          </a>

          <a href="/release" className="card">
            <h3>Release &rarr;</h3>
            <p>Is release down or not?</p>
          </a>

          <a href="/prod" className="card">
            <h3>Prod &rarr;</h3>
            <p>Is prod down or not?</p>
          </a>
        </div>
        
      </main>
      
    </div>
  )
}
