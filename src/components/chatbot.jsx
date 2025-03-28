import { Button } from "reactstrap";
import React, { useState } from "react";
import { FAQDATA } from "../constants/constants";
import ButtonComponent from "./button";
import useChatbot from "../hooks/usechatbot";

export default function ChatBot(){
    const { messages, input, loading, error, sendMessage, handleInputChange } = useChatbot();
    const[ask, setAsk]=useState("");
    const[answer, setAnswer]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Submit clicked",ask);
        setAnswer(ask);
        setAsk("");
        console.log("Answer submitted",answer);
    }
   
    return(
        <div className=" border-4 border-neutral-700 rounded-2xl p-5 w-1/2 ">
        <div className="flex flex-col h-full">
        {messages.map((messages,index)=>(
            <div className="flex flex-col mb-4" key={index}>
                <div className="text-neutral-100 font-bold">{messages.role}</div>
                <div className="text-neutral-400">{messages.content}</div>
            </div>
        )
            
        )}
        <div className="flex flex-wrap m-2">
            <div className="w-4/5 flex flex-col justify-center items-between">
            <input className="text border-neutral-500  border-2 rounded-3xl " onChange={handleInputChange} value={input}></input>
            </div>
            <div className="w-1/5 flex justify-center items-center">
            <Button className="bg-neutral-500 text-neutral-100 rounded-3xl p-2 hover:bg-neutral-400 hover:text-neutral-900 transition duration-300 ease-in-out" onClick={sendMessage}> Send</Button>
            </div>
        </div>

       
        </div>

        </div>
    )

}