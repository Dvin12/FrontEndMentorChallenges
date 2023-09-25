const cards = [
  { title: "Work", bgColor: "bg-[hsl(15,100%,70%)]", icon: "icon-work.svg" },
  { title: "Play", bgColor: "bg-[hsl(195,74%,62%)]", icon: "icon-play.svg" },
  { title: "Study", bgColor: "bg-[hsl(348,100%,68%)]", icon: "icon-study.svg" },
  {
    title: "Exercise",
    bgColor: "bg-[hsl(145,58%,55%)]",
    icon: "icon-exercise.svg",
  },
  {
    title: "Social",
    bgColor: "bg-[hsl(264,64%,52%)]",
    icon: "icon-social.svg",
  },
  {
    title: "Self Care",
    bgColor: "bg-[hsl(43,84%,65%)]",
    icon: "icon-self-care.svg",
  },
];

function getBackgroundColor(title) {
  const card = cards.find((card) => card.title === title);
  return card ? card.bgColor : "";
}

function getBackgroundIcon(title) {
  const card = cards.find((card) => card.title === title);
  return card ? card.icon : "";
}

export default function Card({ card, daily, weekly, monthly }) {
  const dailyTime = card.timeframes.daily.current;
  const dailyTimePast = card.timeframes.daily.previous;

  const weeklyTime = card.timeframes.weekly.current;
  const weeklyTimePast = card.timeframes.weekly.previous;

  const monthlyTime = card.timeframes.monthly.current;
  const monthlyTimePast = card.timeframes.monthly.previous;

  console.log(card.timeframes.daily.current);
  const backgroundColor = getBackgroundColor(card.title);
  const icon = getBackgroundIcon(card.title);

  return (
    <section
      className={`text-white   rounded-xl w-full md:h-full h-[180px] relative overflow-hidden ${backgroundColor}`}
    >
      <div className="flex justify-end  px-4  ">
        <img
          src={`./assets/images/${icon}`}
          alt={icon}
          className={`w-[80px] ${
            card.title === "Exercise" ? "top-[1px]" : "top-[-10px]"
          } absolute`}
        />
      </div>
      <div className="w-full p-8 bg-[hsl(235,46%,20%)] rounded-xl absolute top-[40px] md:h-[230px] h-full cursor-pointer hover:bg-[hsl(235,45%,35%)] duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xl">{card.title}</span>
          <span>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fillRule="evenodd"
                className="hover:fill-white duration-300"
              />
            </svg>
          </span>
        </div>
        <div className="flex items-center justify-between md:inline-block my-2 md:my-0">
          <h2 className="md:text-6xl text-4xl font-thin md:my-4 md:mt-8">
            {daily && `${dailyTime}hrs`}
            {weekly && `${weeklyTime}hrs`}
            {monthly && `${monthlyTime}hrs`}
          </h2>
          <p className={"text-[hsl(236,100%,87%)]"}>
            {daily && `Yesterday - ${dailyTimePast}hrs`}
            {weekly && `Last Week - ${weeklyTimePast}hrs`}
            {monthly && `Last Month - ${monthlyTimePast}hrs`}
          </p>
        </div>
      </div>
    </section>
  );
}
