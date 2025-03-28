import useChatbot from "../hooks/chatbot";

export default function Chatbot() {
    const { messages, sendMessage, input, setInput } = useChatbot(); 
  
    return (
        <div className="flex flex-col h-full p-4">
          
            <div className="flex items-center gap-2 mt-2">
                <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => sendMessage()}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
