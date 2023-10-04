import { useState } from "react";
import data from "../data.json";
import Button from "./Button";
import Card from "./Card";
export default function Section() {
  const [filtered, setFiltered] = useState([]);

  function removeFilter(removeItem) {
    const updatedFiltered = filtered.filter((item) => item !== removeItem);
    setFiltered([...updatedFiltered]);
  }
  console.log(filtered);
  return (
    <>
      {filtered.length > 0 && (
        <section className="absolute flex items-center bg-[#fff]  mx-6 md:top-72 top-24 p-6 gap-3 shadow-lg rounded-lg md:mx-0  md:left-1/2 md:-translate-x-1/2  xl:justify-between 2xl:top-[15%] xl:top-[10%]">
          <div className="flex flex-wrap gap-4 xl:flex-nowrap">
            {filtered.map((item, i) => (
              <div className="flex" key={i}>
                <Button>{item}</Button>
                <button
                  className="px-3 rounded-tr-md rounded-br-md bg-dCyan"
                  onClick={() => removeFilter(item)}
                >
                  <img src="./images/icon-remove.svg" alt="" />
                </button>
              </div>
            ))}
          </div>
          <div>
            <button
              className="font-bold text-dCyan"
              onClick={() => setFiltered([])}
            >
              Clear
            </button>
          </div>
        </section>
      )}
      <section
        className={`flex flex-col items-center justify-center h-full  px-6 xl:px-60  gap-14 xl:gap-6 bg-Cyan xl:min-h-screen xl:justify-start ${
          filtered.length > 0 ? "py-48 xl:py-20" : "py-16 xl:py-14"
        }`}
      >
        {data
          .filter((card) => {
            return filtered.length === 0
              ? true
              : filtered.every(
                  (filter) =>
                    [card.role, card.level].includes(filter) ||
                    card.languages.some((language) => language === filter) ||
                    card.tools.some((tool) => tool === filter)
                );
          })
          .map((card) => (
            <Card
              card={card}
              key={card.id}
              filtered={filtered}
              setFiltered={setFiltered}
            />
          ))}
      </section>
    </>
  );
}
