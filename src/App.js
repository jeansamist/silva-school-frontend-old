import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLoader from './components/AppLoader';
import { useForm, Controller } from 'react-hook-form';
import Sidebar from './components/sidebar/Sidebar';
import Tobar from './components/topbar/Tobar';
import Dashboard from './views/Dashboard';
import { SelectSearch } from './components/ui/Selects';
import { FieldControlled } from './components/ui/Fields';
import wait from './functions/wait';
import Form from './components/Form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
const schema = yup.object({
  pseudo: yup.string().lowercase().required()
}).required()
function App() {
  const [loading, setloading] = useState(true);
  const [isAuth, setisAuth] = useState(false);
  const { control, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 500);
  }, [isAuth]);
  useEffect(() => {
    setisAuth(true);
  }, []);

  async function onSubmit(data) {
    await wait(1000)
    console.log(data);
  }

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
            <Route path="/" element={'Auth'} />
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
                  <Route path="/" element={
                    <Form formState={formState} onSubmit={handleSubmit(onSubmit)}>
                      <FieldControlled control={control} name='pseudo' label='Pseudo' />
                    </Form>
                  } />
                  <Route path="/classes" element={'Classes'} />
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
