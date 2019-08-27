import React from 'react';
import {Form, Input} from 'antd';

class Contact extends React.Component {
  handleSubmit = () => {

  }
  render(){
    return (
      <div className='contact-body'>
        <form method="POST" action="https://formspree.io/ohjennifer.90@gmail.com" className='contact-body'>
          <h1 className='contact'>CONTACT</h1>
          <Form.Item label="Name">
            <Input type="name" name="name"className='input' placeholder="Your Name"/>
          </Form.Item>
          <Form.Item label="Email Address">
            <Input type="email" name="email" className='input' placeholder="Your Email"/>
          </Form.Item>
          <Form.Item label="Message">
            <textarea className="textarea" name="message" placeholder="Your Message"></textarea>        
          </Form.Item>
          <button className="submit" type="submit">Submit</button>
        </form>
      </div>

    )
  }

}


export default Contact