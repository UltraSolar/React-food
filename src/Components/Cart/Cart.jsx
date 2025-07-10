import { useContext, useCallback, useState } from "react";
import CartContext from "../../Context/CartContext/CartContext";
import RowCard from "../RowCard/RowCard";
import { Link, useNavigate } from "react-router-dom";
import { TbArrowBack } from "react-icons/tb";

const Cart = () => {
    const [captchaQuestion, setCaptchaQuestion] = useState("");
    const [captchaAnswer, setCaptchaAnswer] = useState(null);
    const { cart, setCart } = useContext(CartContext);
    const cards = [];
    const nav  = useNavigate();


    const handleLogout = () => {
        localStorage.clear();
        alert("Logged out and storage cleared");
    };

    const handleRemove = (removeItem) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.uuid !== removeItem.uuid)
        );
    };

    const generateCaptcha = useCallback(() => {
        const a = Math.floor(Math.random() * 10);
        const b = Math.floor(Math.random() * 10);
        setCaptchaQuestion(`${a} + ${b}`);
        setCaptchaAnswer(a + b);

        setTimeout(() => {
            const userInput = prompt(`CAPTCHA: What is ${a} + ${b}?`);
            if (parseInt(userInput) === a + b) {
                alert("CAPTCHA passed. Order completed!");
                setCart([]);
                nav("/home");
            } else {
                alert("Incorrect CAPTCHA. Try again.");
            }
        }, 0);
    }, []);


    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-blue-500 text-white px-6 py-4 shadow-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">DO MI NOSE👃🍔🍕🍟🌭🍿</h1>

                    <div className="flex items-center gap-6">
                        <h2>
                            <Link className="flex items-center gap-2" to="/home"><TbArrowBack /> <p>Back to homepage</p></Link>
                        </h2>

                        <button
                            onClick={handleLogout}
                            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-1.5 px-4 rounded-lg transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="p-6 bg-gray-100">
                {cart.length === 0 ? (
                    <p className="text-center text-gray-600">No items in cart.</p>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>

                        <div className="flex justify-center">
                            <div className="w-full max-w-6xl grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {cart.map((item) => (
                                    <RowCard
                                        key={item.uuid}
                                        image={item.image}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        onRemove={() => handleRemove(item)}
                                    />
                                ))}
                            </div>
                        </div>
                    </>

                )}
            </div>
            {/* Sticky Done Button */}
            {cart.length > 0 && (
                <button
                    onClick={generateCaptcha}
                    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition"
                >
                    Done
                </button>
            )}

        </div>
    );
};

export default Cart;
