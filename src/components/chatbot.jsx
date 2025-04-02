
import React, { useState } from "react";
import useChatbot from "../hooks/usechatbot";

export default function ChatBot() {
    const { messages, input, loading, error, sendMessage, handleInputChange } = useChatbot();
    const [ask, setAsk] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit clicked", ask);
        setAnswer(ask);
        setAsk("");
        console.log("Answer submitted", answer);
    };

    return (
        <div className="border-4 border-neutral-700 rounded-2xl p-5 w-full max-w-lg mx-auto mb-10 mt-10">
            <div className="flex flex-col h-full">
                <h2 className="text-center text-lg sm:text-2xl text-neutral-400 my-2">Chat with me</h2>

                <div className="overflow-auto max-h-96 p-3 space-y-2">
                    {messages.map((message, index) => (
                        <div key={index} className="flex flex-col ">

                            <div className={` ${message.role=="user"?"text-right text-neutral-300":"text-left text-neutral-200"}`}>{message.content}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                    <input
                        className="w-full sm:w-4/5 border-2 border-neutral-500 rounded-3xl py-2 px-4 text-lg focus:outline-none"
                        onChange={handleInputChange}
                        value={input}
                        placeholder="Type your message..."
                    />
                    <Button
                        className="w-full sm:w-1/5 bg-blue-500 text-neutral-100 rounded-3xl py-2 text-lg hover:bg-cyan-500 hover:text-neutral-900 transition duration-300 ease-in-out"
                        onClick={sendMessage}
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}
