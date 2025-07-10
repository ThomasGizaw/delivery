"use client";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import BottomNav from "./../components/BottomNav";
import TopNav from "./../components/TopNav";

const mockFeed = [
  {
    restaurant: "Artichoke Basille's Pizza",
    distance: "0.7 miles",
    dishes: [
      {
        id: 1,
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        dish: "Crab Slice",
        rating: 4.8,
        reviews: 3050,
        description: "Crab Sauce, Fresh Mozzarella with a Surimi Crab Meat St...",
        price: 8.95,
      },
      {
        id: 2,
        video: "https://www.w3schools.com/html/movie.mp4",
        dish: "Spinach Artichoke",
        rating: 4.7,
        reviews: 1200,
        description: "Spinach, artichoke, mozzarella, and cream sauce.",
        price: 9.25,
      },
    ],
  },
  {
    restaurant: "Joe's Pizza",
    distance: "1.2 miles",
    dishes: [
      {
        id: 3,
        video: "https://www.w3schools.com/html/movie.mp4",
        dish: "Pepperoni Feast",
        rating: 4.6,
        reviews: 2100,
        description: "Classic pepperoni, mozzarella, and house sauce.",
        price: 7.50,
      },
      {
        id: 4,
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        dish: "Veggie Delight",
        rating: 4.5,
        reviews: 900,
        description: "Peppers, onions, olives, mushrooms, mozzarella.",
        price: 6.75,
      },
    ],
  },
];

export default function HomeFeed() {
  const [feed] = useState(mockFeed);
  const [saved, setSaved] = useState<number[]>([]);

  const handleAddToCart = useCallback((id: number) => {
    alert("Added to cart!");
  }, []);

  const handleToggleSave = useCallback((id: number) => {
    setSaved((prev) => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }, []);

  const handleShare = useCallback(() => {
    alert("Share feature coming soon!");
  }, []);

  const handleReviews = useCallback(() => {
    alert("Reviews coming soon!");
  }, []);

  // Optionally, check auth and redirect if not logged in
  useEffect(() => {
    // Removed Supabase auth check
  }, []);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center pb-20">
      <TopNav onToggleAction={() => window.location.href = "/menu"} />
      {/* Feed: group by restaurant, horizontal scroll for dishes */}
      <div className="flex flex-col gap-8 w-full max-w-md mx-auto mt-4">
        {feed.map((group, idx) => (
          <div key={group.restaurant + idx} className="mb-2">
            <div className="flex items-center justify-between px-2 mb-2">
              <div className="font-bold text-base">{group.restaurant}</div>
              <div className="text-xs text-gray-500">{group.distance}</div>
            </div>
            <div className="flex flex-row gap-4 overflow-x-auto pb-2">
              {group.dishes.map(item => (
                <div key={item.id} className="relative min-w-[260px] max-w-[260px] rounded-xl overflow-hidden shadow-md bg-black">
                  <video src={item.video} controls className="w-full h-56 object-cover" />
                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-base">{item.dish}</span>
                      <span className="bg-orange-500 text-xs rounded px-2 py-1">${item.price.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center text-xs mb-1">
                      <span>⭐ {item.rating} ({item.reviews})</span>
                    </div>
                    <div className="text-xs mb-2 truncate">{item.description}</div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-orange-500" onClick={() => handleAddToCart(item.id)}>Add to Cart</Button>
                      <Button size="sm" variant={saved.includes(item.id) ? "default" : "outline"} onClick={() => handleToggleSave(item.id)}>{saved.includes(item.id) ? "❤️" : "🤍"}</Button>
                      <Button size="sm" variant="outline" onClick={handleShare}>🔁</Button>
                      <Button size="sm" variant="outline" onClick={handleReviews}>📑</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
} 