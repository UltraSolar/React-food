import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import STORAGE_KEYS from "../../Constants/Storage"

const Login = () => {
    const [pwdVisible, setPwdVisible] = useState(false);
    const [loginData, setLoginData] = useState({ id: "", password: "" });
    const nav = useNavigate();

    function handlelogin(e) {
        e.preventDefault();
        if (loginData.id === "ajay.gupta@flairlabs.com" && loginData.password === "1234") {
            localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(loginData));
            nav('/home');
        }
        else window.alert("Please check your credentials!!!")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Welcome Back
                </h2>
                <form className="space-y-6" onSubmit={handlelogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={loginData.id}
                            onChange={((e) => { setLoginData({ ...loginData, id: e.target.value }) })}
                            placeholder="you@example.com"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={pwdVisible ? "text" : "password"}
                                id="password"
                                value={loginData.password}
                                onChange={((e) => { setLoginData({ ...loginData, password: e.target.value }) })}
                                placeholder="••••••••"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                            <div
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500"
                                onClick={() => setPwdVisible(!pwdVisible)}
                            >
                                {pwdVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="mr-2 h-4 w-4 text-indigo-600" />
                            Remember me
                        </label>
                        <a href="#" className="text-sm text-indigo-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200 shadow-sm"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-600">
                    Don’t have an account?{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;

