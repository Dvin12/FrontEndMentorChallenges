import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Notifications from "./components/Notifications";

export default function App() {
  const [notifications, setNotifications] = useState(3);
  const [read, setRead] = useState(false);
  function handleReadAll() {
    setNotifications(0);
    setRead(true);
  }
  return (
    <main className="bg-[hsl(211,68%,94%)] font-JakartaPlus md:h-screen  h-full grid place-content-center ">
      <Notifications>
        <Header notifications={notifications} handleReadAll={handleReadAll} />
        <Cards read={read} />
      </Notifications>
    </main>
  );
}
