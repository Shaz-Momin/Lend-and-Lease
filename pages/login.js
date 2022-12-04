export default function login() {
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign in to your account</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <button
                        type="submit"
                        className="block rounded bg-burntOrange-800 mb-4 text-white
                        w-full p-3 hover:bg-burntOrange-700">Sign in</button>
                </div>
                <div className="text-grey-dark mt-6">
                    Don't have an account? <a className="no-underline border-b border-blue text-blue" href="../signup/">Sign up</a>
                </div>
            </div>
        </div>
    )
}