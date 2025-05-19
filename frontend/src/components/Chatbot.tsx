import { useState } from 'react';

export default function Chatbot() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [open, setOpen] = useState(false);

    const handleAsk = async () => {
        const res = await fetch('/api/chatbot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: input }),
        });
        const data = await res.json();
        setResponse(data.reply);
    };

    return (
        <>
            {/* Floating Icon Button */}
            <button
                className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700"
                onClick={() => setOpen(!open)}
                aria-label="Open Chatbot"
            >
                <img src="/chat-icon.png" alt="Chatbot" className="w-6 h-6" />
            </button>

            {/* Chatbot Popup */}
            {open && (
                <div className="fixed bottom-20 right-6 w-80 bg-white shadow-lg rounded-lg p-4 border z-50">
                    <h2 className="font-bold text-lg mb-2">Ask Ingredient Bot</h2>
                    <input
                        type="text"
                        className="border p-2 w-full"
                        placeholder="Ask about an ingredient..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        onClick={handleAsk}
                        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded w-full"
                    >
                        Ask
                    </button>
                    <p className="mt-2 text-sm">{response}</p>
                </div>
            )}
        </>
    );
}