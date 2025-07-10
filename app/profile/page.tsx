import BottomNav from "./../components/BottomNav";

export default function ProfilePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-2xl font-bold mb-2">Profile</h1>
      <p className="text-gray-500">Manage your user settings here.</p>
      <BottomNav />
    </div>
  );
} 