import './App.css'
import React from 'react'
import WorldMap from './components/WorldMap'
import Clock from './components/Clock'
import StateComponent from './context/stateComponent'

function App() {

  return (
    <StateComponent>
      <div>
        <aside>
          <Clock />
        </aside>
        <main>
          <div className='map'>
            <WorldMap />
          </div>
        </main>
      </div>
    </StateComponent>
  );
}

export default App
