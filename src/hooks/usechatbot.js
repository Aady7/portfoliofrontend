import { useEffect, useState } from "react";
import axios from "axios";
import Groq from "groq-sdk";
import { chatbotContent } from "../constants/constants";
const API_URL="https://api.groq.com/openai/v1/chat/completions";

const useChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log("Input changed:", e.target.value);
  }

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const newMessages = [...messages, { role: "user", content: input }];

    setMessages(newMessages);
    try {
      const response = await axios.post(API_URL,
        {
          messages: [
            {
              role: "system",
              content: chatbotContent,
            },
            ...newMessages,
          ],
          model: "llama-3.3-70b-versatile",
          temperature: 1,
          max_completion_tokens: 1024,
          top_p: 1,
          stream: false,
          stop: null,
        },
        {
          headers: {
            Authorization:"Bearer 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",
            "Content-Type": "application/json",},
        }
      );
      if(response.data?.choices?.length){
        const botResponse=response.data.choices[0]?.message?.content|| "Sorry, I didn't get that. Can you please rephrase?";
        setMessages([...newMessages,{role:"assistant",content:botResponse}]);
        console.log(messages);
      }
      else{
        console.error("Invalid api key is being hit");
      }
        
    } catch (err) {
      setError(err);
      console.log(error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };
  return{
    messages,
    input,
    loading,
    error,
    setInput,
    sendMessage,
    handleInputChange,
    sendMessage,
  }
};

export default useChatbot;