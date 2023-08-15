export default function TotalCard({ card }) {
  const { platform, channel, total, type, growth, loss } = card;

  const fbBorder = "bg-[hsl(208,92%,53%)]";
  const twitterBorder = "bg-[hsl(203,89%,53%)]";
  const igBorder =
    "bg-gradient-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)]";
  const youtubeBorder = "bg-[hsl(348,97%,39%)]";

  return (
    <div className="relative flex flex-col justify-between gap-5 py-8 overflow-hidden rounded-md bg-lightCardBg dark:bg-darkCardBg">
      <div
        className={`absolute top-0 w-full h-[5px] ${
          platform === "fb"
            ? fbBorder
            : platform === "twitter"
            ? twitterBorder
            : platform === "ig"
            ? igBorder
            : youtubeBorder
        }`}
      ></div>
      <div className="flex items-center justify-center gap-2">
        <img
          src={`./assets/images/icon-${
            platform === "fb"
              ? "facebook"
              : platform === "twitter"
              ? "twitter"
              : platform === "ig"
              ? "instagram"
              : "youtube"
          }.svg`}
          alt={platform}
        />
        <span className="text-sm font-bold text-lightTextSmall dark:text-darkSmallText">
          {channel}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <h3 className="text-6xl font-bold text-lightTextBig dark:text-darkBigText">
          {total}
        </h3>
        <span className="tracking-[5px] uppercase text-lightTextSmall dark:text-darkSmallText">
          {type}
        </span>
      </div>
      <div
        className={`flex items-center justify-center gap-1 font-bold ${
          growth === 0 ? "text-loss" : "text-growth"
        }`}
      >
        <img
          src={`./assets/images/${
            growth === 0 ? "icon-down.svg" : "icon-up.svg"
          }`}
          alt=""
        />
        <span>{growth === 0 ? loss : growth} Today</span>
      </div>
    </div>
  );
}
