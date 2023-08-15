export default function TodayCard({ card }) {
  const { platform, type, amount, growth, loss } = card;
  return (
    <div className="flex flex-col gap-8 px-8 py-6 rounded-md bg-lightCardBg dark:bg-darkCardBg">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-lightTextSmall dark:text-darkSmallText">
          {type === "Page Views" && type}
          {type === "Likes" && type}
          {type === "Profile Views" && type}
          {type === "Retweets" && type}
          {type === "Total Views" && type}
        </span>
        <img
          src={`./assets/images/${
            platform === "fb"
              ? "icon-facebook.svg"
              : platform === "ig"
              ? "icon-instagram.svg"
              : platform === "twitter"
              ? "icon-twitter.svg"
              : "icon-youtube.svg"
          }`}
          alt=""
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold text-lightTextBig dark:text-darkBigText">
          {amount}
        </span>
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
          <span>{growth === 0 ? loss : growth}%</span>
        </div>
      </div>
    </div>
  );
}
