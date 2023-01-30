import ChatMessage from "../components/ChatMessage";
import { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi";

const INITIAL_STATE = {
  user: "gpt",
  message: "How can i help you today ?",
};

const Chat = () => {
  const [input, setInput] = useState<string>("");
  const [models, setModels] = useState<{ id: string }[]>([]);
  const [chatLog, setChatLog] = useState<{ user: string; message: string }[]>([
    INITIAL_STATE,
  ]);

  const clearChat = () => {
    setChatLog([INITIAL_STATE]);
  };

  // const getEngines = () => {
  //   fetch("http:localhost:3000/models")
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data.models.data);
  //       setModels(data.models.data);
  //     });
  // };

  // useEffect(() => {
  //   getEngines();
  // }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newChatLog = [...chatLog, { user: "human", message: `${input}` }];
    setInput("");
    setChatLog(newChatLog);
    const messages = newChatLog.map(message => message.message);

    const response = await fetch("http://localhost:8080/api/v1/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
      }),
    });
    const data = await response.json();
    setChatLog([...newChatLog, { user: "gpt", message: `${data.result}` }]);
  };

  return (
    <div className="bg-gray-700 text-white/90 min-h-[calc(100vh-73px)] text-center flex">
      {/* Aside */}
      <aside className="w-64 bg-gray-900 p-[10px]">
        {/* New Chat Button */}
        <button
          type="button"
          onClick={clearChat}
          className="w-full p-3 border border-white/30 rounded-md text-left flex items-center gap-4 hover:bg-gray-800 transition duration-400"
        >
          <HiPlus />
          New Chat
        </button>

        {/* Models List */}
        {/* <div>
          <select>
            {models.map((model, index: number) => (
              <option key={index} value={model.id}>
                {model.id}
              </option>
            ))}
          </select>
        </div> */}
      </aside>

      {/* ChatLog */}
      <section className="relative flex-1 text-left">
        {/* Chat Message */}
        {chatLog.map((message, index) => (
          <div
            className={`${message.user === "gpt" ? "bg-gray-800" : ""}`}
            key={index}
          >
            <ChatMessage user={message.user} message={message.message} />
          </div>
        ))}
        {/* Bottom Prompt */}
        <div className="p-6 absolute bottom-0 left-0 right-0 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className="bg-gray-600 w-full rounded-md border-none p-3 text-xl outline-none shadow-md"
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Chat;
