
import React, { Fragment } from 'react';
import './App.css';

import InputBooks from './components/inputBooks';
import ListBooks from './components/listBooks';

function App()
{
  return (
    <Fragment>
      <div className='container'>
        <InputBooks />
        <ListBooks />
      </div>
    </Fragment>
  );
};


export default App;
