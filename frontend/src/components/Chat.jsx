import React from 'react';
import config, { ActionProvider, MessageParser } from './ChatConfig';
import Chatbot from 'react-chatbot-kit';

const Chat = (props) => {

    const isOpen = props.open;
    console.log(isOpen);

    return (
        isOpen &&    // isopenがtrueの場合のみ表示
            <div className='chatbot'>
                <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />  
            </div>
    );
}

export default Chat;
