import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import SideBar from './components/SideBar/SiderBar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* app body */}
      <div className="app__body">
        {/* sidebar */}
        <SideBar />
        {/* feed */}
        <Feed />
      </div>


      {/* widgets */}
    </div>
  );
}

export default App;
