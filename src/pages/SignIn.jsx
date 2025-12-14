import { SignIn, useAuth, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function SignInPage() {
  const navigate = useNavigate();
  const clerk = useClerk();
  const { isSignedIn, isLoaded } = useAuth();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (isLoaded && isSignedIn && !hasShownToast.current) {
      hasShownToast.current = true;
      sessionStorage.setItem("justSignedIn", "true");
      const timer = setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isSignedIn, isLoaded, navigate]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Sign In to Your Account</h1>
          <div className="text-lg text-gray-600">Loading authentication...</div>
          <div className="mt-4 text-sm text-gray-500">
            If this takes too long, check your Clerk configuration in .env file
          </div>
        </div>
      </div>
    );
  }

  if (isSignedIn) {
      
    return (
   
      <div className="min-h-screen flex items-center justify-center bg-gray-50"> 
        <div className="text-center">
          <div className="text-lg mb-4 text-gray-800">You are already signed in.</div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/dashboard")}
              className="p-3 px-6 font-semibold bg-orange-500 rounded-md text-white cursor-pointer hover:bg-orange-600"
            >
              Go to Dashboard
            </button>
            <button
              onClick={async () => {
                await clerk.signOut();
                window.location.href = "/sign-in";
              }}
              className="p-3 px-6 font-semibold bg-gray-500 rounded-md text-white cursor-pointer hover:bg-gray-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to access your dashboard</p>
        </div>

        <SignIn 
          routing="path" 
          path="/sign-in"
          signUpUrl="/sign-up"
          afterSignInUrl="/dashboard?signed_in=true"
          fallbackRedirectUrl="/dashboard"
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-lg"
            }
          }}
        />
      </div>
    </div>
  );
}

