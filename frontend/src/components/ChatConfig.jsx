
import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {},
        });
      })}
    </div>
  );
};



const config = {
  initialMessages: [createChatBotMessage(`answer any question`)],
  botName: "chervilBot",

};


// Named exports for classes
export { MessageParser, ActionProvider };

// Default export for the config
export default config;
