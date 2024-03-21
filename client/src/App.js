
import React, { Fragment } from 'react';
import './App.css';

import InputBooks from './components/inputBooks';
import EditBooks from './components/editBooks';
import ListBooks from './components/listBooks';

function App()
{
  return (
    <Fragment>
      <div className='container'>
        <InputBooks />
        <EditBooks />
        <ListBooks />
      </div>
    </Fragment>
  );
};


export default App;
