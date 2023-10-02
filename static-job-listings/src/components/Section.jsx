import data from "../data.json";
import Button from "./Button";
import Card from "./Card";
export default function Section() {
  return (
    <>
      <section className="absolute flex items-center bg-[#fff]  mx-6  top-24 p-6 gap-3 shadow-lg rounded-lg">
        <div className="flex flex-wrap gap-4">
          <div className="flex">
            <Button>Frontend</Button>
            <button className="px-3 rounded-tr-md rounded-br-md bg-dCyan">
              <img src="./images/icon-remove.svg" alt="" />
            </button>
          </div>

          <div className="flex">
            <Button>CSS</Button>
            <button className="px-3 rounded-tr-md rounded-br-md bg-dCyan">
              <img src="./images/icon-remove.svg" alt="" />
            </button>
          </div>
          <div className="flex">
            <Button>Javascript</Button>
            <button className="px-3 rounded-tr-md rounded-br-md bg-dCyan">
              <img src="./images/icon-remove.svg" alt="" />
            </button>
          </div>
        </div>
        <div>
          <button className="font-bold text-dCyan">Clear</button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-6 py-36 gap-14 bg-Cyan">
        {data.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </section>
    </>
  );
}
