import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';

const SendMessageForm = ({sendMessage}) => {

    const [message, setMessage] = React.useState('');

  return (
    <Form onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage('');
    }}>
        <InputGroup className='mb-3'>
            <Form.Control 
                type="text" 
                placeholder="Enter message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" variant='primary'>Send</Button>
        </InputGroup>
    </Form>
  )
}

export default SendMessageForm
