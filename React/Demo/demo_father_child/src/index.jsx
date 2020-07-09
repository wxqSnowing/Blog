import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import FatherChild from './pages/FatherChild';
// import UserListConteiner from './pages/UserListConteiner';
import MyHook from './pages/MyHook'

ReactDOM.render(
  <React.StrictMode>
      <>
      {/* <FatherChild></FatherChild> */}
      {/* <UserListConteiner></UserListConteiner> */}
      <MyHook></MyHook>
      </>
  </React.StrictMode>,
  document.getElementById('root')
);
