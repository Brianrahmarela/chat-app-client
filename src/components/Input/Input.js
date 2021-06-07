import React from 'react';

import './Input.css';
import { Button} from "react-bootstrap";


const Input = ({message, setMessage, sendMessage}) => (
  <form>
    <input 
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    {/* <button className="sendButton tw-bg-secondary" onClick={(event) => sendMessage(event)}>Send</button> */}
    <Button
      type="submit"
      variant="primary"
      className="tw-bg-secondary tw-border-secondary sendButton"
      onClick={(event) => sendMessage(event)}
    >
      Send
    </Button>
  </form>
)

export default Input