import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLoader from './components/AppLoader';
import Sidebar from './components/sidebar/Sidebar';
import Tobar from './components/topbar/Tobar';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Classes from './views/Classes';
function App() {
  const [loading, setloading] = useState(true);
  const [isAuth, setisAuth] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 500);
  }, [isAuth]);
  useEffect(() => {
    setisAuth(true);
  }, []);

  if (loading) {
    return (
      <div className="App">
        <AppLoader />
      </div>
    );
  } else if (loading === false && isAuth === false) {
    return (
      <Router location={{ pathname: '/' }}>
        <div className="App">
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div className="App">
          <div className="app-main">
            <Sidebar />
            <div className="app-container">
              <Tobar />
              <div className="views">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/classes" element={<Classes />} />
                  <Route path="/subjects" element={'Subjects'} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
