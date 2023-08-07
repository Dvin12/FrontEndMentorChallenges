export default function Background() {
  return (
    <div className="h-full flex justify-end items-end w-full">
      <div className=" w-screen md:h-[60%] h-screen  md:bg-[url('./public/assets/images/bg-desktop.png')] bg-[url('./public/assets/images/bg-mobile.png')] bg-cover"></div>
    </div>
  );
}
