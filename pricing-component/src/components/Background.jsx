export default function Background() {
  return (
    <div className="flex w-full ">
      <img
        src="../assets/images/bg-top.svg"
        alt=""
        className="absolute -top-12 left-48 xl:top-0 xl:left-auto xl:right-1"
      />
      <img
        src="../assets/images/bg-bottom.svg"
        alt=""
        className="hidden xl:absolute xl:block xl:bottom-0 xl:left-0"
      />
    </div>
  );
}
