import React from 'react'
import { Col, Row } from 'react-bootstrap'
import MessageContainer from './MessageContainer'
import SendMessageForm from './SendMessageForm'

const ChatRoom = ({messages, sendMessage}) => {
  return (
    <div>
        <Row className='p-5'>
            <Col sm={10}>
                <h1>Chat Room</h1>
            </Col>

            <Col>
                
            </Col>
        </Row>

        <Row className='p-5'>
            <Col sm={12}>
                <MessageContainer messages={messages} />
            </Col>
            <Col>
                <SendMessageForm sendMessage={sendMessage} />
            </Col>
        </Row>
    </div>
  )
}

export default ChatRoom
