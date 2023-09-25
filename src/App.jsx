import { useState } from "react";
import NewsLetter from "./components/NewsLetter";
import Success from "./components/Success";

export default function App() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubsribed] = useState(false);
  return (
    <div className="bg-[hsl(235,18%,26%)] h-screen md:grid md:place-content-center font-roboto">
      {subscribed === true ? (
        <Success setSubsribed={setSubsribed} email={email} />
      ) : (
        <NewsLetter setSubsribed={setSubsribed} setEmail={setEmail} />
      )}
    </div>
  );
}
