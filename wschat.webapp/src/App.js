import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from './Components/WaitingRoom';
import ChatRoom from './Components/ChatRoom';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

function App() {

  const [conn, setConn] = useState();
  const [messages, setMessages] = useState([]);


  const joinChatRoom = async (userName, chatRoom) => {

    try {

      //init connection
      const conn = new HubConnectionBuilder()
                    .withUrl('http://localhost:5091/chat')
                    .configureLogging(LogLevel.Information)
                    .build();

      //set up handler
      conn.on('JoinSpecificChat', (user, message) => {
        console.log(`${user}: ${message}`);
      });

      conn.on('ReceiveSpecificMessage', (user, message) => {
        // console.log(`${user}: ${message}`);
        setMessages(messages => [...messages, {user, message}])
      });

      await conn.start();
      await conn.invoke("JoinSpecificChat", {userName, chatRoom});

      setConn(conn);
    
      
    } catch (e) {
      console.log(e);
    }
  }

  const sendMessage = async (message) => { 
    try {
      await conn.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div>
      <main>
        <Container>
          <Row className="px-5 my-5">
            <Col sm="12">
              <h1 className='font-weight-light'>
                Welcome to WSChat
              </h1>
            </Col>
          </Row>

          {conn
            ? <ChatRoom messages={messages} sendMessage={sendMessage} /> 
            : <WaitingRoom joinChatRoom={joinChatRoom}/>
          }

        </Container>

      </main>
    </div>
  );
}

export default App;
