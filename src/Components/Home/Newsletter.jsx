import {useState} from "react";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email && email.includes("@")) {
      // Handle subscription logic here
      console.log("Subscribing email:", email);
      // Reset form
      setEmail("");
    }
  };

  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        {/* Left side - Text content */}
        <div className="flex-1 lg:max-w-lg text-center lg:text-left">
          <h2 className="text-lg sm:text-2xl lg:text-2xl font-bold leading-tight">
            Be the first one to know about offers,
            <br />
            new products and discounted products.
          </h2>
        </div>

        {/* Right side - Email subscription form */}
        <div className="flex-1 lg:max-w-md w-full mt-6 lg:mt-0">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex w-full border border-white/30 rounded-2xl overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 sm:px-6 sm:py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
              />
              <button
                onClick={handleSubmit}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-400 rounded-2xl hover:bg-orange-500 text-black font-semibold transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
