export default function Item({ item }) {
  return (
    <div className="relative duration-200 cursor-pointer group ">
      <img
        src={item.mobile}
        alt={item.name}
        className="block w-full xl:hidden"
      />
      <img
        src={item.desktop}
        alt={item.name}
        className="hidden w-full xl:block "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent xl:bg-gradient-to-t "></div>
      <div className="absolute top-0 left-0 w-full h-full duration-200 bg-white opacity-0 group-hover:opacity-60 "></div>
      <h4
        className={`absolute bottom-4  text-2xl text-white font-JosefinSans xl:left-0 px-4 xl:px-10 xl:text-3xl  ${
          item.name.length > 10 ? "w-1/2 xl:w-[16rem] " : "w-1/3 xl:w-[14rem]"
        } tracking-wide leading-none  group-hover:text-black  `}
      >
        {item.name}
      </h4>
    </div>
  );
}
