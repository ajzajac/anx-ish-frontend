import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'

function App() {
  return (
    <div className="App">
        <div>
          {/* <p>anx-ish</p>
          <p>has your mental health nose-dived in quarantine?</p>
          <p style={{marginLeft: "15%", marginTop: "3%", fontFamily: 'Montserrat Subrayada, sans-serif', textShadow: "1px 1px 8px rgb(243, 187, 138)" }}>join the club.</p>
          <p>COMING SOON!</p> */}
          <MainContainer />
        </div>
    </div>
  );
}

export default App;
