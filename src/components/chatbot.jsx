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
       
        <div className=" border-4 border-neutral-700 rounded-2xl p-5 w-1/2 items-center justify-center mx-auto mb-20 mt-20  ">
        <div className="flex flex-col h-full  justify-between ">
        <h2 className=" align-middle text-3xl my-1 text-neutral-400  itme-center ">Chat with me</h2>
        {messages.map((messages,index)=>(
            <div className="flex flex-col flex-wrap   h-full " key={index} >
                <div className="text-neutral-400 font-bold text-left">{messages.role}</div>
                <div className="text-neutral-300 text-left">{messages.content}</div>
            </div>
        )
            
        )}
        <div className="flex flex-wrap  ">
            <div className="w-4/5 flex flex-wrap  flex-col justify-center items-between ">
            <input className="text border-neutral-500  border-2 rounded-3xl py-3 " onChange={handleInputChange} value={input}></input>
            </div>
            <div className="w-1/5 flex justify-center items-center ">
            <Button className="bg-neutral-500 text-neutral-100 rounded-3xl pl-4 pr-4 py-3 text-xl hover:bg-neutral-400 hover:text-neutral-900 transition duration-300 ease-in-out" onClick={sendMessage}> Send</Button>
            </div>
        </div>

       
        </div>

        </div>
       
    )

}