export default function Header({ children }) {
  return (
    <header className="border-black ">
      <h1 className="text-2xl font-extrabold text-lightTextBig dark:text-darkBigText">
        Social Media Dahsboard
      </h1>
      {children}
    </header>
  );
}
