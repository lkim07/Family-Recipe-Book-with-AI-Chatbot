import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';

export default function NewRecipePage() {
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const recognitionRef = useRef<SpeechRecognition>();
    const [listening, setListening] = useState(false);

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window)) return;
        const SpeechRecognition = (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.lang = 'en-US';
        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
            const transcript = Array.from(event.results)
                .map((r: any) => r[0].transcript)
                .join('');
            setInstructions((prev) => prev + ' ' + transcript);
        };
        recognitionRef.current.onerror = () => stopListening();
    }, []);

    const startListening = () => {
        recognitionRef.current?.start();
        setListening(true);
    };

    const stopListening = () => {
        recognitionRef.current?.stop();
        setListening(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: submit title & instructions
        console.log({ title, instructions });
    };

    return (
        <div className="p-4">
            <Header />
            <h2 className="text-xl font-semibold mb-4">New Recipe</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Recipe Title"
                    className="w-full border p-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Instructions"
                    className="w-full border p-2 h-32"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={listening ? stopListening : startListening}
                        className={`px-4 py-2 rounded ${listening ? 'bg-red-500' : 'bg-yellow-400'} text-white`}
                    >
                        {listening ? '🛑 Stop Voice' : '🎤 Start Voice'}
                    </button>
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                    Submit Recipe
                </button>
            </form>
        </div>
    );
}