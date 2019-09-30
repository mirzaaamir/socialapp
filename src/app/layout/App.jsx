import React , { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import  EventDashboard  from '../../feature/event/EventDashboard/EventDashboard';
import NavBar from '../../feature/nav/NavBar/NavBar';
import './App.css';
import EventForm from '../../feature/event/EventForm/EventForm';
import SettingsDashboard from '../../feature/user/Settings/SettingsDashboard'
import UserDetailedPage from '../../feature/user/UserDetailed/UserDetailedPage'
import PeopleDashboard from '../../feature/user/PeopleDashboard/PeopleDashboard'
import EventDetailedPage from '../../feature/event/EventDetailed/EventDetailedPage'
import HomePage from '../../feature/Home/HomePage.jsx'


class App extends Component {
  render () {
    return (
      <div>
        <Switch> 
        <Route  exact path="/" component={HomePage} />
        </Switch>
        <Route
        path="/(.+)"
        render={() => (
          <div>
          <NavBar/>
          <Container className="main">
          <Switch>   
             <Route path="/events" component={EventDashboard} />
            <Route path="/event/:id" component={EventDetailedPage} />
            <Route path="/people "component={PeopleDashboard} />
            <Route path="/profile/:id" component={UserDetailedPage} />
            <Route path="/settings" component={SettingsDashboard} />
            <Route path="/createEvent" component={EventForm} />
         </Switch>
          
          </Container>
        
         
    
    
        </div>
        )}
        />
       
       </div>
      
    );
  }
  }
  

export default App;
