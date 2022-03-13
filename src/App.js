import React, { useState, useRef, useEffect, SetStateAction } from 'react';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import ToastMsg from './ToastMsg';
import background_img from './whatsapp_bg.jpg'
import Header from './Header';
import './App.css';

function App() {
  const chatContainerRef = useRef(null);

  const [input, setInputValue] = useState('');
  const [Messages, setMessagesValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  useEffect(() => {
    let chatHistory=localStorage.getItem('chatHistory');
    if(chatHistory){
      let chat= JSON.parse(chatHistory);
      setMessagesValue(chat)
    }
  }, [])
  const renderMessages = () => {
    return Messages.map((messageObject, index) => {
      if (messageObject.sender === 'bot') {
        return (
          <React.Fragment key={messageObject.id}>

            <div className='bot-message'>
              <div className='bot-message-content'>  {messageObject.message}</div>

            </div>
          </React.Fragment>
        );
      }

      if (messageObject.sender === 'user') {
        return (
          <React.Fragment key={messageObject.id}>
            <div className='user-message'>
              <div className='user-message-content'>  {messageObject.message}</div>

            </div>
          </React.Fragment>
        );
      }


    });
  };


  const scrollIntoView = () => {
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef?.current?.scrollHeight;
      }
    }, 50);
  };

  useEffect(() => {
    scrollIntoView()
  }, [Messages])

  const sendMsg = () => {
    if (input && input != '') {
      let msgs = [...Messages];

      msgs.push({ id: msgs.length, sender: 'user', message: input });
      msgs.push({ id: msgs.length, sender: 'bot', message: input });
      setMessagesValue(msgs);
      setMessagesValue(prevState => {
        setInputValue('')
        localStorage.setItem('chatHistory',JSON.stringify(Messages))
        return prevState;
      });
    }

  }
  const setUserMsg = (msg) => {
    setInputValue(msg);

  }

  const customButtonStyle = { backgroundColor: '' };

  let placeholder = 'Write your message here';

  return (
    <div
      style={{ backgroundImage: `url(${background_img})` }}

    >
      <ToastMsg />
      <div className="react-chatbot-kit-chat-container">
        <Header/>
        <div className="react-chatbot-kit-chat-inner-container">

          <div
            className="react-chatbot-kit-chat-message-container"
            ref={chatContainerRef}
          >


            {renderMessages()}
            <div style={{ paddingBottom: '15px' }} />
          </div>

          <div className="react-chatbot-kit-chat-input-container">
            <form
              className="react-chatbot-kit-chat-input-form"
              onSubmit={handleSubmit}
            >
              <input
                className="react-chatbot-kit-chat-input"
                placeholder={placeholder}
                value={input}
                onChange={(e) => setUserMsg(e.target.value)}
              />
              <button
                className="react-chatbot-kit-chat-btn-send"
                style={customButtonStyle}
                onClick={sendMsg}
              >
                <SendSharpIcon className="react-chatbot-kit-chat-btn-send-icon"

                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
