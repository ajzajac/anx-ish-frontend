import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MainContainer from './containers/MainContainer'
import Title from './components/Title'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className='titleNav'>
        <Title />
        <NavBar />
      
        {/* <div className='landing-page-temp'>
          <p>anx-ish</p>
          <p>has your mental health nose-dived in quarantine?</p>
          <p style={{marginLeft: "15%", marginTop: "3%", fontFamily: 'Montserrat Subrayada, sans-serif', textShadow: "1px 1px 8px rgb(243, 187, 138)" }}>join the club.</p>
          <p>COMING SOON!</p>
        </div> */}
        
          <MainContainer />
          <Footer />
        </div>
        
    </div>
  );
}

export default App;
