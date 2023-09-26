import { useState } from "react";
import FaqItem from "./FaqItem";
import Button from "./Button";

const faq = [
  {
    question: "What is Bookmark?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. ",
  },

  {
    question: "How can I request a new browser?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
  },

  {
    question: "Is there a mobile app?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  },

  {
    question: "What about other Chromium browsers?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
  },
];

export default function FAQ() {
  const [isSelected, setIsSelected] = useState(null);

  function handleSelected(num) {
    setIsSelected((number) => (number !== num ? num : null));
  }

  return (
    <section className="flex flex-col items-center justify-center text-gBlue">
      <article className="px-6 mt-24 text-center ">
        <h4 className="px-4 text-2xl font-medium xl:text-4xl text-vDarkBlue">
          Fequently Asked Questions
        </h4>
        <p className="my-4 xl:text-lg xl:w-[33rem]">
          Here are some of our FAQ's. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </article>

      <section className="w-full px-6 my-10 xl:w-1/2">
        {faq.map((question, i) => (
          <FaqItem
            question={question}
            num={i}
            key={i}
            isSelected={isSelected}
            handleSelected={handleSelected}
          />
        ))}
      </section>
      <Button color="blue">More Info</Button>
    </section>
  );
}
