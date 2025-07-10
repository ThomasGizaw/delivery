"use client";
import { useState, useCallback } from "react";
import TopNav from "./../components/TopNav";
import BottomNav from "./../components/BottomNav";

const mockMenu = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg",
    name: "Crab Slice",
    price: 8.95,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    name: "Pepperoni Feast",
    price: 7.50,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg",
    name: "Veggie Delight",
    price: 6.75,
  },
];

export default function MenuPage() {
  const [cart, setCart] = useState<number[]>([]);
  const [saved, setSaved] = useState<number[]>([]);

  const handleAddToCart = useCallback((id: number) => {
    setCart((prev) => [...prev, id]);
    alert("Added to cart!");
  }, []);

  const handleToggleSave = useCallback((id: number) => {
    setSaved((prev) => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white pb-20">
      <TopNav onToggleAction={() => window.location.href = "/home"} />
      <h1 className="text-2xl font-bold my-4">Menu</h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md px-4">
        {mockMenu.map((dish) => (
          <div key={dish.id} className="bg-white rounded-xl shadow p-2 flex flex-col items-center">
            <img src={dish.image} alt={dish.name} className="w-full h-28 object-cover rounded-lg mb-2" />
            <div className="font-semibold text-center mb-1">{dish.name}</div>
            <div className="text-orange-500 font-bold mb-1">${dish.price.toFixed(2)}</div>
            <div className="flex gap-2">
              <button className="bg-orange-500 text-white rounded px-3 py-1 text-sm" onClick={() => handleAddToCart(dish.id)}>Add to Cart</button>
              <button className={`rounded px-3 py-1 text-sm border ${saved.includes(dish.id) ? 'bg-orange-100 text-orange-500 border-orange-500' : 'bg-white text-gray-400 border-gray-300'}`} onClick={() => handleToggleSave(dish.id)}>{saved.includes(dish.id) ? "❤️" : "🤍"}</button>
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
} 