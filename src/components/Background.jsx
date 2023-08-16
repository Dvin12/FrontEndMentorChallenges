export default function Background() {
  return (
    <div className=" w-full flex ">
      <img
        src="../assets/images/bg-top.svg"
        alt=""
        className="absolute -top-12 left-48"
      />
      <img src="../assets/images/bg-bottom.svg" alt="" className="hidden" />
    </div>
  );
}
