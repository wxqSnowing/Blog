import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import FatherChild from './pages/FatherChild';
import UserListConteiner from './pages/UserListConteiner';

ReactDOM.render(
  <React.StrictMode>
      {/* <FatherChild></FatherChild> */}
      <UserListConteiner></UserListConteiner>
  </React.StrictMode>,
  document.getElementById('root')
);
