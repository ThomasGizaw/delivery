"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // Remove: const router = useRouter();

  async function handleSocialLogin(provider: "google" | "facebook" | "apple") {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) setError(error.message);
    setLoading(false);
  }

  async function handlePhoneLogin() {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithOtp({ phone });
    if (error) setError(error.message);
    else alert("Check your phone for the OTP!");
    setLoading(false);
  }

  // Optionally, listen for auth state changes and redirect
  // useEffect(() => {
  //   const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
  //     if (session) router.push("/home");
  //   });
  //   return () => listener?.unsubscribe();
  // }, [router]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Logo */}
      <div className="mb-8 flex flex-col items-center">
        <div className="rounded-full bg-orange-500 w-16 h-16 flex items-center justify-center text-3xl font-bold text-white shadow-lg mb-2">D</div>
        <span className="text-2xl font-semibold tracking-tight">Delivery</span>
      </div>
      {/* Auth Card */}
      <div className="bg-white rounded-xl shadow-md w-full max-w-xs p-6 flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-center mb-2">{isLogin ? "Sign In" : "Sign Up"}</h2>
        {/* Social Logins */}
        <Button variant="outline" className="w-full mb-2" onClick={() => handleSocialLogin("google")} disabled={loading}>Continue with Google</Button>
        <Button variant="outline" className="w-full mb-2" onClick={() => handleSocialLogin("facebook")} disabled={loading}>Continue with Facebook</Button>
        <Button variant="outline" className="w-full mb-2" onClick={() => handleSocialLogin("apple")} disabled={loading}>Continue with Apple</Button>
        <div className="flex items-center my-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="mx-2 text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        {/* Phone Login */}
        <Input type="tel" placeholder="Phone number" className="w-full" value={phone} onChange={e => setPhone(e.target.value)} />
        <Button className="w-full mt-2" onClick={handlePhoneLogin} disabled={loading || !phone}>Continue with Phone</Button>
        {error && <div className="text-red-500 text-xs text-center mt-2">{error}</div>}
        <div className="text-center text-sm mt-4">
          {isLogin ? (
            <>
              Don&apos;t have an account?{' '}
              <button className="text-orange-500 font-semibold" onClick={() => setIsLogin(false)}>Sign Up</button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button className="text-orange-500 font-semibold" onClick={() => setIsLogin(true)}>Sign In</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
