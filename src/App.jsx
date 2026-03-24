import React from "react";
import './App.css'

function ChatInput({chatMessages,setChatMessages}){
  const [inputText,setInputText]=React.useState('');

  function saveInputText(event){
      setInputText(event.target.value);

  }

  function sendMessage(){
    if (!inputText.trim()) {
      return;
    }

    const newChatmessages=[
    ...chatMessages,
    {
      message:inputText,
      sender:'user',
      id:crypto.randomUUID()
    }
   ]
      setChatMessages(newChatmessages);

    const response=Chatbot.getResponse(inputText);
     setChatMessages([
    ...newChatmessages,
    {
      message:response,
      sender:'bot',
      id:crypto.randomUUID()
    }
   ]);
    
   setInputText('');

  }

  function handleKeyDown(event){
    if (event.key === 'Enter') {
      sendMessage();
    }
  }
  return(
  <div className="flex items-center justify-center gap-2">
    <input type="text" 
    placeholder="Send a message to the Chatbot" 
    size="30"
    onChange={saveInputText}
    onKeyDown={handleKeyDown}
    value={inputText}
    className="border-2 p-1"
    
    />  

    <Button onClick={sendMessage} className="rounded-sm bg-green-500 p-2 font-semibold text-white">Send</Button>
    
    </div>);
}


function Button({ children,onClick,className }) {
  return <button onClick={onClick} className={className}>{children}</button>;
}

function ChatMessage({message,sender}){
  const isBot = sender === 'bot';

  return (
        <div className={`mb-3 flex items-end gap-3 ${isBot ? 'justify-start' : 'justify-end'}`}>
          {isBot && 
          (<img src="src/img/bot.png" alt="" width={50}/>)  }
          <span
            className={`inline-block max-w-[320px] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
              isBot ? 'bg-zinc-200 text-zinc-900' : 'bg-green-600 text-white'
            }`}
          >
            {message}
          </span>
         {!isBot && 
         (<img src="src/img/user.png" alt="" width={50}/>)}
    </div>
    );
  }

 function ChatMessages({chatMessages}){
  const messagesContainerRef = React.useRef(null);

  React.useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) {
      return;
    }

    container.scrollTop = container.scrollHeight;
  }, [chatMessages]);


  return(
    <div
      ref={messagesContainerRef}
      className="scrollbar-hidden mb-4 flex h-[420px] w-full flex-col overflow-y-auto pr-2"
    >
    
    {chatMessages.map((msg)=>{
        return(
          <ChatMessage
          key={msg.id}
          message={msg.message}
          sender={msg.sender}
          />
        )
      })}
      </div>
  );

}





export default function App(){
   const [chatMessages,setChatMessages]=React.useState([])
   

  return(
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg">
        <ChatMessages
        chatMessages={chatMessages}
        />
        <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        />
      </div>
    </div>
  );
}
