import Feature from "./Feature";

const features = [
  {
    name: "Track company-wide progress",
    text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    name: "Advanced built-in reports",
    text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },

  {
    name: "Everything you need in one place",
    text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export default function Manage() {
  return (
    <article className="flex flex-col items-center justify-center mt-14">
      <section className="flex flex-col items-center justify-center px-6 text-center text-darkGrayBlue">
        <h2 className="text-3xl font-semibold leading-normal text-darkBlue">
          What's different about Manage?
        </h2>
        <p className="px-2 my-4 text-sm leading-loose ">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </section>
      <section className="flex flex-col gap-10 my-10">
        {features.map((feature, i) => (
          <Feature key={i} feature={feature} number={i} />
        ))}
      </section>
    </article>
  );
}
