import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Header with logos */}
      <header className="w-full flex justify-between items-center px-8 py-6">
        <img src="/favicon.ico" alt="favicon" className="h-8 w-8" />
        <img
          src="/amac-logo.png"
          alt="AMAC Logo"
          className="h-10 w-auto"
          style={{ objectFit: "contain" }}
        />
      </header>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
