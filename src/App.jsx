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
  <>
    <input type="text" 
    placeholder="Send a message to the Chatbot" 
    size="30"
    onChange={saveInputText}
    onKeyDown={handleKeyDown}
    value={inputText}
    className="border-2 p-1"
    
    />  

    <Button onClick={sendMessage} className="text-white bg-green-500 font-semibold p-2 ml-2 rounded-sm">Send</Button>
    
    </>);
}


function Button({ children,onClick,className }) {
  return <button onClick={onClick} className={className}>{children}</button>;
}

function ChatMessage({message,sender}){
  return (
        <div className="mb-2 flex items-center gap-2">
          {sender==='bot' && 
          (<img src="src/img/bot.png" alt="" width={50}/>)  }
          <span className="rounded-md bg-zinc-300 px-3 py-2">{message}</span>
         {sender==='user' && 
         (<img src="src/img/user.png" alt="" width={50}/>)}
    </div>
    );
  }

 function ChatMessages({chatMessages}){


  return(
    <>
    
    {chatMessages.map((msg)=>{
        return(
          <ChatMessage
          key={msg.id}
          message={msg.message}
          sender={msg.sender}
          />
        )
      })}
      </>
  );

}





export default function App(){
   const [chatMessages,setChatMessages]=React.useState([])
   

  return(
    <div className="flex min-h-screen items-center justify-center">
      <div>
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
