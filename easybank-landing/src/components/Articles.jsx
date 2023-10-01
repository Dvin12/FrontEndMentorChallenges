import Card from "./Card";

const articles = [
  {
    image: "./images/image-currency.jpg",
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    text: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
  },

  {
    image: "./images/image-restaurant.jpg",
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  },

  {
    image: "./images/image-plane.jpg",
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're aborad. We'll even show you...",
  },

  {
    image: "./images/image-confetti.jpg",
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
  },
];

export default function Articles() {
  return (
    <article className="px-4 py-20 bg-veryLighG 2xl:px-40 xl:py-24 xl:px-16 ">
      <div className="flex items-center justify-center text-center xl:items-start xl:justify-start xl:text-left">
        <h3 className="text-3xl xl:text-4xl text-dBlue">Latest Articles</h3>
      </div>
      <section className="flex flex-col items-center justify-center h-full gap-6 mt-8 xl:mt-12 2xl:gap-10 xl:flex-row ">
        {articles.map((card, i) => (
          <Card card={card} key={i} />
        ))}
      </section>
    </article>
  );
}
