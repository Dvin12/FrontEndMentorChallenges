import BulletPoint from "./BulletPoint";
import Company from "./Company";

const bulletPoints = [
  {
    image: "./assets/images/icon-blacklist.svg",
    name: "Create blacklists",
    text: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },

  {
    image: "./assets/images/icon-text.svg",
    name: "Plain text snippets",
    text: "Remove unwanted formatting from copied text for a consistent look.",
  },

  {
    image: "./assets/images/icon-preview.svg",
    name: "Sneak preview",
    text: "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

const companies = [
  {
    name: "Google",
    image: "./assets/images/logo-google.png",
  },

  {
    name: "IBM",
    image: "./assets/images/logo-ibm.png",
  },

  {
    name: "Microsoft",
    image: "./assets/images/logo-microsoft.png",
  },

  {
    name: "Hewlett Packard",
    image: "./assets/images/logo-hp.png",
  },

  {
    name: "Vector Graphics",
    image: "./assets/images/logo-vector-graphics.png",
  },
];

export default function Workflow() {
  return (
    <>
      <article className="flex flex-col items-center justify-center w-full text-center">
        <h3 className="text-3xl font-bold text-dBlue xl:text-5xl">
          Supercharge your workflow
        </h3>
        <p className="my-4 xl:text-lg xl:my-8">
          We've got the tools to boost your productivity.
        </p>
      </article>

      <section className="w-full my-14 xl:flex xl:items-center xl:justify-center xl:px-40 xl:gap-10">
        {bulletPoints.map((bulletPoint, i) => (
          <BulletPoint bulletPoint={bulletPoint} key={i} />
        ))}
      </section>

      <section className="my-24 xl:flex xl:w-full xl:justify-between xl:items-center xl:px-40">
        {companies.map((company, i) => (
          <Company company={company} key={i} />
        ))}
      </section>
    </>
  );
}
