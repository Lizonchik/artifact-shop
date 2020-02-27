import React, { useEffect, useState } from 'react';
import artifactSrevice from './services/artifacts';
import Card from './components/card';
import CardWithStyleModule from './components/cardWithMod';
import './Artifacts.scss';

function App() {
  const [artifacts, setArtifacts] = useState([]);
  useEffect(() => {
    artifactSrevice.getArtifacts().then((artifacts) => {
      setArtifacts(artifacts)
    })
  }, []);

  return (
    <div>
      <header>
        <h1>Legendary Artifacts Shop</h1>
      </header>
      <div className="artifacts-container">
        {artifacts.map((artifact: IArtifact, i: number) => (
          <Card key={`artifact-${i}`} artifact={artifact} />
          // <CardWithStyleModule key={`artifact-${i}`} artifact={artifact} />
        ))}
      </div>
    </div>
  );
}

export default App;
