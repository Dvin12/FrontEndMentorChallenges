interface SwitchProps {
  handleNext: () => void;
  handlePrevious: () => void;
}

export default function Switch({
  handleNext,
  handlePrevious,
}: SwitchProps): JSX.Element {
  return (
    <div className="absolute bottom-0 right-0 xl:-right-[9.7rem] ">
      <button
        className="px-6 py-4 duration-200 bg-black xl:px-8 xl:py-7 hover:bg-veryDarkGrey"
        onClick={handlePrevious}
      >
        <img src="./assets/images/icon-angle-left.svg" alt="button" />
      </button>
      <button
        className="px-6 py-4 duration-200 bg-black xl:px-8 xl:py-7 hover:bg-veryDarkGrey"
        onClick={handleNext}
      >
        <img src="./assets/images/icon-angle-right.svg" alt="button" />
      </button>
    </div>
  );
}
