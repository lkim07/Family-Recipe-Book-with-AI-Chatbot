import Header from '@/components/Header';
import { useRouter } from 'next/router';

export default function RecipeDetailPage() {
    const { query } = useRouter();

    return (
        <div className="p-4">
            <Header />
            <h1 className="text-xl font-bold">Recipe Detail - {query.id}</h1>
            {/* TODO: display recipe image, ingredients, steps, notes */}
        </div>
    );
}