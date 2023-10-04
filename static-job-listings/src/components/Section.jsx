import { useState } from "react";
import data from "../data.json";
import Button from "./Button";
import Card from "./Card";
export default function Section() {
  const [filtered, setFiltered] = useState([]);
  console.log(filtered);
  return (
    <>
      {filtered.length > 0 && (
        <section className="absolute flex items-center bg-[#fff]  mx-6  top-24 p-6 gap-3 shadow-lg rounded-lg">
          <div className="flex flex-wrap gap-4">
            {filtered.map((item, i) => (
              <div className="flex" key={i}>
                <Button>{item}</Button>
                <button className="px-3 rounded-tr-md rounded-br-md bg-dCyan">
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
      <section className="flex flex-col items-center justify-center px-6 py-36 gap-14 bg-Cyan">
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
