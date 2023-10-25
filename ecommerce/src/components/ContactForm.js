  
    import React from 'react';
    import { Form, Button } from 'react-bootstrap';
    const formContainerStyle = {
        maxWidth: '400px', // Adjust the desired width
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f5f5f5', // Light background color
        border: '1px solid #ddd',
        boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.1)', // Box shadow
      };
      
      const headerStyle = {
        textAlign: 'center',
        marginBottom: '20px',
      };
    
    const ContactForm = () => {
      return (
        <div className="container mt-5"style={formContainerStyle}>
               <div style={headerStyle}>
          <h2>Contact Us</h2>
          </div>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
    
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
    
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>
    
            <Button variant="primary" type="submit" className='mt-4'>
              Submit
            </Button>
          </Form>
        </div>
      );
    };
    
    export default ContactForm;
       