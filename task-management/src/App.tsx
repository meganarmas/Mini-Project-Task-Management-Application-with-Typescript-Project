import React from 'react';
import TaskList from './Components/TaskDetails';
import HomePage from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import AuthenticationGuard from './Components/Authenication-Account';
import CallBackPage from './Components/CallBack';

const App: React.FC = () =>{

  const { isLoading } = useAuth0();

  if ( isLoading ) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route
      path='/task-details' 
      element={<AuthenticationGuard component={TaskList} />}
      />
      <Route path='/callback' element={<CallBackPage />} />
    </Routes>

  );
};

export default App;
