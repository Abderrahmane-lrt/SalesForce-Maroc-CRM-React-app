import { SignUp, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignUpPage() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  if (isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <SignUp 
        routing="path" 
        path="/sign-up"
        signInUrl="/sign-in"
        afterSignUpUrl="/dashboard"
        fallbackRedirectUrl="/dashboard"
      />
    </div>
  );
}

