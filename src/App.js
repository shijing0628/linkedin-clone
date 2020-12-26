import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import SideBar from './components/SideBar/SiderBar';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* app body */}
      <div className="app__body">
        <SideBar />
      </div>
      {/* sidebar */}
      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export default App;
