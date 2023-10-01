import BulletPoint from "./BulletPoint";

const bulletPoints = [
  {
    image: "./images/icon-online.svg",
    name: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    image: "./images/icon-budgeting.svg",
    name: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    image: "./images/icon-onboarding.svg",
    name: "Fast Onboarding",
    text: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    image: "./images/icon-api.svg",
    name: "Open API",
    text: "Manage your savings, investments, pension and much more from one account. Tracking your money has never been easier.",
  },
];

export default function EasyBank() {
  return (
    <article className="px-4 mt-8 bg-lightGB py-14 text-gBlue 2xl:-mt-20 xl:-mt-12 xl:py-20 2xl:px-40 xl:px-16">
      <section className="flex flex-col items-center justify-center text-center xl:text-left xl:items-start ">
        <h2 className="px-4 text-3xl xl:text-4xl text-dBlue xl:px-0">
          Why choose Easybank?
        </h2>
        <p className="my-4 xl:text-lg xl:w-[40rem]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center gap-10 mt-10 xl:flex-row">
        {bulletPoints.map((bulletPoint, i) => (
          <BulletPoint bulletPoint={bulletPoint} key={i} />
        ))}
      </section>
    </article>
  );
}
