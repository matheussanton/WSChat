import {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';


const WaitingRoom = ({joinChatRoom}) => {

    const [userName, setUserName] = useState('');
    const [chatRoom, setChatRoom] = useState('');

    return (
        <Form onSubmit={e => {
                e.preventDefault();
                joinChatRoom(userName, chatRoom);
            }}
        >
            <Row className='p-5'>
                <Col sm="12">
                    <Form.Group>
                        {/* <Form.Label>Username</Form.Label> */}
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                        />

                        <Form.Control
                            type="text"
                            placeholder="Enter chat room"
                            value={chatRoom}
                            onChange={e => setChatRoom(e.target.value)}
                        />

                    </Form.Group>

                </Col>
                <Col sm="12">
                    <hr/>
                    <Button variant="success" type="submit">
                        Join
                    </Button>
                </Col>
                
            </Row>

        </Form>
    )

}

export default WaitingRoom;
