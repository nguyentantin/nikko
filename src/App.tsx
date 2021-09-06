import React from 'react';

import WhoWeAre from 'src/sections/WhoWeAre';
import Team from 'src/sections/Team';
import Funds from 'src/sections/Funds';
import Header from 'src/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <WhoWeAre />
      <Team />
      <Funds />
    </div>
  );
}

export default App;
