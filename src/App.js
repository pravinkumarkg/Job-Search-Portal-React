import React from 'react';
import './sass/style.scss';
import Div from './Components/Div';
import HomePage from './Pages/Home';

const App = () => {

  return (
    <div className="App">
      <Div>
        <HomePage />
      </Div>
    </div>
  );
}

export default App;
