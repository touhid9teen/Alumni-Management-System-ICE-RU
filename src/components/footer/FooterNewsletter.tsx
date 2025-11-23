import { useState } from "react";

const FooterNewsletter: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <div>
      <h4 className="text-white font-bold mb-4 sm:mb-6 text-sm uppercase tracking-wider">
        Newsletter
      </h4>
      <p className="text-xs text-gray-500 mb-4">
        Subscribe to get the latest updates and event invitations.
      </p>
      <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-gray-800 border border-gray-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors font-semibold text-sm"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default FooterNewsletter;
