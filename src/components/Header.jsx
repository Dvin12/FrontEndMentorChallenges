import Counter from "./Counter";
import Mark from "./Mark";

export default function Header({ notifications, handleReadAll }) {
  return (
    <header className="flex items-center justify-between ">
      <Counter notifications={notifications} />
      <Mark handleReadAll={handleReadAll} />
    </header>
  );
}
