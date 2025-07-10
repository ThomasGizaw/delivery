import BottomNav from "./../components/BottomNav";

export default function ActivityPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-2xl font-bold mb-2">Activity</h1>
      <p className="text-gray-500">Your past orders and activity will appear here.</p>
      <BottomNav />
    </div>
  );
} 