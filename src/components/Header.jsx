export default function Header({ children }) {
  return (
    <header className="border-black ">
      <h1 className="text-2xl font-extrabold">Social Media Dahsboard</h1>
      {children}
    </header>
  );
}
