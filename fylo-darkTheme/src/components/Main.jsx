export default function Main({ children }) {
  return (
    <main className="w-full h-full overflow-hidden font-openSans bg-background mix-blend-overlay">
      {children}
    </main>
  );
}
