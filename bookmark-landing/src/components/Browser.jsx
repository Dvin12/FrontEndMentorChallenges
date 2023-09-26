import Button from "./Button";

export default function Browser({ browser, num }) {
  const { image, text, version, title } = browser;
  return (
    <article
      className={`flex flex-col items-center justify-center py-10 shadow-lg rounded-2xl text-gBlue ${
        num === 1 && "mt-20"
      } ${num === 2 && "mt-40"} `}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <img src={image} alt={title} />
        <h4 className="mt-5 text-xl font-medium text-vDarkBlue">
          Add to {title}
        </h4>
        <p className="mt-2">Minimum version {version}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-6">
        <img src="./assets/images/bg-dots.svg" alt="background" />

        <Button color="blue">Add & Install Extension</Button>
      </div>
    </article>
  );
}
