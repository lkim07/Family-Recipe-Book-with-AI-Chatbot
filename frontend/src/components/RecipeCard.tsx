interface Props {
    title: string;
    author: string;
    date: string;
}

export default function RecipeCard({ title, author, date }: Props) {
    return (
        <div className="border rounded-lg p-4 my-2 shadow-md hover:bg-gray-100 cursor-pointer">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">By {author} on {date}</p>
        </div>
    );
}