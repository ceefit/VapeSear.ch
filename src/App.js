import React from 'react';
import { Tween, Timeline } from 'react-gsap';
import logo from './logo.svg';
import './App.css';

function App() {
  const TweenComponent = () => (
    <Tween repeat={-1}
           duration={3}
           from={{ rotation: 0 }}
           to={{ rotation: -360 }}
           ease={"Power0.easeNone"}
    >
      <img src={logo} className="App-logo" alt="logo" />
    </Tween>
  );

  const TimelineComponent = () => (
    <Timeline
      repeat={-1}
      target={
        <div>
          <TweenComponent />
        </div>
      }
    >
      <Tween duration={0.5}
             from={{ opacity: 0 }}
             to={{ opacity: 1 }} />
      <Tween duration={2}
             from={{ x: '-300px'}}
             to={{ x: '300px' }}
             ease={"Circ"} />
      <Tween duration={0.5}
             from={{ opacity: 1 }}
             to={{ opacity: 0 }} />
      <Tween duration={0.5} />
    </Timeline>
  );

  return (
    <div className="App">
      <header className="App-header">
        <TimelineComponent/>
        <p>Loading Eternally...</p>
      </header>
    </div>
  );
}

export default App;
