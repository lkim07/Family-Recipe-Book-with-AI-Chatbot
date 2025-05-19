import Header from '@/components/Header';

export default function LoginPage() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center h-[80vh]">
                <h2 className="text-xl font-semibold">Login to Family Recipe Book</h2>
                <input type="email" placeholder="Email" className="border p-2 m-2 w-64" />
                <input type="password" placeholder="Password" className="border p-2 m-2 w-64" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Login</button>
            </div>
        </div>
    );
}