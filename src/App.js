import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import RuangBelajar from './components/RuangBelajar';
import Profile from './components/Profile';
import RuangKelas from './components/RuangKelas';
import RuangMentor from './components/RuangMentor';
import Login from './components/Login';
import {BrowserRouter, Router, Route} from 'react-router-dom';
class App extends Component {
  state = {
    showComponent: true
  }

  componentDidMount() {

  }
  render() {
  return (
    
    <BrowserRouter>
    <div>
      <Header />
    <div className="container">
      {
      this.state.showComponent
      ?
        <Route exact path='/' component={RuangBelajar} />
                : null
      }
      {
      this.state.showComponent
      ?
          <Route path='/profile' component= {Profile} />
          : null
        }
        {
      this.state.showComponent
      ?
            <Route path='/ruangkelas' component= {RuangKelas} />
            : null
      }
      {
      this.state.showComponent
      ?
              <Route path='/ruangmentor' component={RuangMentor} />
              : null
            }
             {
      this.state.showComponent
      ?
                <Route path='/login' component={Login} />
                : null
      }
           </div>
           </div>
            </BrowserRouter>

  );
}
}

export default App;
