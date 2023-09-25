export default function Slider() {
  return (
    <>
      <div className="bg-[hsl(229,57%,11%)] w-full mt-4 rounded-3xl p-[3px]">
        <div className="w-[70%] bg-gradient-to-r from-[hsl(6,100%,80%)] to-[hsl(335,100%,65%)]  bg-white rounded-3xl">
          <div className="w-full flex items-end justify-end">
            <div className="bg-white w-[20px] h-[20px] rounded-full "></div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between mt-2 text-[hsl(243,100%,93%)] font-bold">
        <span>0 GB</span>
        <span>1000 GB</span>
      </div>
    </>
  );
}
