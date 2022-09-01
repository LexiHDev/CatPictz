import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route } from 'react-router';

const defaultState = {
  posts: [],
}

function App() {
  const [state, setState] = useState(defaultState)

  return (
    <div className="App">
      <Header/>
        <Route path="/" element={}/>
    </div>
  );
}

export default App;
