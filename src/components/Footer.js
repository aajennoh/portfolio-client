import React from 'react';
import { Menu, Icon, Button } from 'antd';

class Footer extends React.Component {

  state = {
    current: 'home',
  };

  handleClick = e => {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };


  render(){
    return (
      <Menu mode='horizontal' className="footer">
        <Button className='footer-button' key="linkedin" shape="circle">
          <a href="https://www.linkedin.com/in/jenniferoh627/" target="_blank" rel="noopener noreferrer">
            <Icon type="linkedin" />
          </a>
        </Button>
        <Button className='footer-button'  key="medium" shape="circle">
          <a href="https://medium.com/@ohjennifer.90/" target="_blank" rel="noopener noreferrer">
            <Icon type="medium" />
          </a>
        </Button>
        <Button className='footer-button'  key="github" shape="circle">
          <a href="https://github.com/aajennoh" target="_blank" rel="noopener noreferrer">
            <Icon type="github" />
          </a>
        </Button>
        <Button className='footer-button'  key="youtube" shape="circle">
          <a href="https://www.youtube.com/channel/UCMNFzfBQkNXcTljZJnZ28Gg" target="_blank" rel="noopener noreferrer">
            <Icon type="youtube" />
          </a>
        </Button>
      </Menu>
    )
  }

}


export default Footer