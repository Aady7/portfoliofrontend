import { useState } from "react";
import { chatbotContent } from "../constants/constants";

const useChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const groq = new Groq({ apikey: process.env.VITE_GROQ_API_KEY });

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const newMessages = [...messages, { role: "user", content: input }];

    setMessages(newMessages);
    try {
      const response = await groq.chat.completions.create(
        {
          message: [
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
            Authorization: `Bearer ${process.env.VITE_GROQ_API_KEY}`,
          },
        }
      );
      if(response.data?.choices?.length){
        const botResponse=response.data.choices[0]?.message?.content|| "Sorry, I didn't get that. Can you please rephrase?";
        setMessages([...newMessages,{role:"assistant",content:botResponse}]);
      }
      else{
        console.error("Invalid api key is being hit");
      }
        
    } catch (err) {
      setError(err);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return{
    messages,
    input,
    loading,
    error,
    setInput,
    sendMessage
  }
};
export default useChatbot;
