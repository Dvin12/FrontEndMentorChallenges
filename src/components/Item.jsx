export default function Item({ item }) {
  return (
    <div className="relative">
      <img src={item.mobile} alt="earth" />
      <div className="w-full h-full bg-gradient-to-r from-black to-transparent absolute top-0 left-0"></div>
      <h4
        className={`absolute bottom-4 text-2xl text-white font-JosefinSans px-4 ${
          item.name.length > 10 ? "w-1/2" : "w-1/3"
        } tracking-wide leading-none`}
      >
        {item.name}
      </h4>
    </div>
  );
}
