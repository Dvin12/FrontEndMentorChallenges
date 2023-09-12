import Button from "./Button";

export default function Browser({ browser }) {
  const { image, text, version, title } = browser;
  return (
    <article className="flex flex-col items-center justify-center py-10 shadow-lg rounded-2xl ">
      <div className="flex flex-col items-center justify-center text-center">
        <img src={image} alt={title} />
        <h4 className="mt-5 text-xl font-medium">Add to {title}</h4>
        <p className="mt-2">Minimum version {version}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-6">
        <img src="./assets/images/bg-dots.svg" alt="background" />

        <Button>Add & Install Extension</Button>
      </div>
    </article>
  );
}
