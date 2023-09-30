export default function Main({ children, isOpen }) {
  return (
    <main className="relative overflow-hidden font-PublicSans">
      {children}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen opacity-40 bg-gradient-to-b from-dBlue from-60% to-white "></div>
      )}
    </main>
  );
}
