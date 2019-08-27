import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
// import ReactTooltip from 'react-tooltip'


class NavBar extends React.Component {

  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };


  render(){
    return (
      <Menu className="navbar" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">

        <Menu.Item key="home" className="home">
          <Link to='/' >
          <Icon type="home" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="resume">
          <a href="https://drive.google.com/file/d/1-z3gNuYtEVDnYo8zp-w9NNFkJxDgs2g6/view?usp=sharing" 
          target="blank"></a>
          <Icon type="profile" />
            Resume
        </Menu.Item>
        <Menu.Item key="projects">
          <Link to='/projects'>
          <Icon type="project" />
            Projects
          </Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to='/contact'>
          <Icon type="mail" />
            Contact
          </Link>
        </Menu.Item>
      </Menu>
    )
  }

}


export default NavBar