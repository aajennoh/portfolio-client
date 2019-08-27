import React from 'react';
import HomeContainer from './HomeContainer'
import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
// import Resume from '../components/Resume'
import Projects from '../components/Projects'
import Contact from '../components/Contact'



class MainContainer extends React.Component {
  render(){
    return (
      <div className="main-container">
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomeContainer}/>
          {/* <Route exact path='/resume' component={Resume}/> */}
          <Route exact path='/projects' component={Projects}/> 
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </div>

    )

  }

}




export default MainContainer