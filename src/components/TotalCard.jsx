export default function TotalCard({ card }) {
  return (
    <div className="relative flex flex-col justify-between gap-5 py-8 overflow-hidden rounded-md bg-blue-50">
      <div className="absolute top-0 w-full h-[5px] bg-black"></div>
      <div className="flex items-center justify-center gap-2">
        <img
          src={`./assets/images/icon-${
            card.platform === "fb"
              ? "facebook"
              : card.platform === "twitter"
              ? "twitter"
              : card.platform === "ig"
              ? "instagram"
              : "youtube"
          }.svg`}
          alt=""
        />
        <span className="text-sm font-bold">{card.channel}</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <h3 className="text-6xl font-bold">{card.totalFollowers}</h3>
        <span className="tracking-[5px] uppercase">followers</span>
      </div>
      <div className="flex items-center justify-center gap-1 font-bold text-green-600">
        <img src="./assets/images/icon-up.svg" alt="" />
        <span>{card.todayFollowed} Today</span>
      </div>
    </div>
  );
}
