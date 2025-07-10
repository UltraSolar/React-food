import React, { useEffect, useState, useContext } from 'react';
import Card from '../Card/Card';
import { FaRegCreditCard } from 'react-icons/fa'; // icon for cards
import API_KEY from '../../Constants/Api'
import { useNavigate } from 'react-router-dom';
import CartContext from '../../Context/CartContext/CartContext';
import { v4 as uuidv4 } from "uuid"

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useContext(CartContext);
  const Nav = useNavigate();

  // Simulate API fetch
  useEffect(() => {
    const fetchCards = async () => {
      const data = await fetch(API_KEY.FOOD_API)
        .then(res => res.json());

      // Sample transformation if needed
      const formatted = data.meals.map((item) => ({
        id: item.idMeal,
        image: item.strMealThumb,
        title: item.strMeal,
        subtitle: item.strArea,
      }));

      setCards(formatted);
      setLoading(false);
    };

    fetchCards();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    alert('Logged out and storage cleared');
    Nav("/");
  };

  const handleAddCart = (n) => {
    const itemWithUUID = { ...n, uuid: uuidv4() };
    setCart((prevCart) => [...prevCart, itemWithUUID]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-500 text-white px-6 py-4 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">DO MI NOSE👃🍔🍕🍟🌭🍿</h1>

          <div className="flex items-center gap-6">
            <div className="relative">
              <FaRegCreditCard className="text-2xl" onClick={() => Nav('/Cart')} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                {cart.length}
              </span>
            </div>

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
        {loading ? (
          <p className="text-center text-gray-600">Loading cards...</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <Card
                key={card.id}
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
                buttonText="Add Cart"
                onButtonClick={() => { handleAddCart(card) }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

};

export default Home;
