import { useState, useEffect } from 'react';

export default function parseDistroPage(env, interval = 60000) {
    const [envData, setEnvData] = useState(null);

    useEffect(() => {
        function checkRevision() {
            return fetch(`https://${env}.redfintest.com/distro.html`)
              .then((response) => response.text())
              .then(text => {
                  return hackilyParseDistroHTML(text);
              })
              .catch((err) => {
                  console.error('Caught error hitting distro URL', err);
                  return false;
              });
        }

        async function updateRevision() {
            const data = await checkRevision();
            setEnvData(data);
        }

        updateRevision();

        const id = setInterval(() => {
            updateRevision();
        }, interval);

        return () => clearInterval(id);
    }, [env, interval]);

    return envData;
}

function hackilyParseDistroHTML(responseText) {
    let parser = new DOMParser();
    let htmlDoc = parser.parseFromString(responseText, 'text/html');
    const childNodes = htmlDoc.lastChild.lastChild.childNodes;
    return (
      <div>
          {/* Built on...*/}
        <span>{childNodes[2].textContent}</span>
        <br/>
          {/* Last deployed commit + stash link*/}
          <a target="_blank" href={childNodes[12].nextSibling.innerHTML}>Last deployed commit </a>
      </div>
    );
    //[0] = version ...
    //[2] = Built on: 2021-07-13 19:45:38\n"
    //[12].nextSibling.innerHTMl = stash link to pr
}