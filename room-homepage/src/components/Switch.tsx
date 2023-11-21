export default function Switch({ handleNext, handlePrevious }): JSX.Element {
  return (
    <div className="absolute bottom-0 right-0 ">
      <button className="px-6 py-4 bg-black" onClick={handlePrevious}>
        <img src="./assets/images/icon-angle-left.svg" alt="" />
      </button>
      <button className="px-6 py-4 bg-black" onClick={handleNext}>
        <img src="./assets/images/icon-angle-right.svg" alt="" />
      </button>
    </div>
  );
}
