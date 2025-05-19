import Header from '@/components/Header';
import RecipeCard from '@/components/RecipeCard';
import Chatbot from '@/components/Chatbot';

export default function HomePage() {
    return (
        <div className="min-h-screen p-4">
            <Header />
            <h1 className="text-2xl font-bold mb-4">Family Recipes</h1>
            <RecipeCard title="Kimchi" author="Grandma" date="May 2023" />
            <Chatbot /> {/* Floating Icon version now */}
        </div>
    );
}