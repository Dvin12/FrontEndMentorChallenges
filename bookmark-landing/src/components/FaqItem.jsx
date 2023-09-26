export default function FaqItem({ question, num, handleSelected, isSelected }) {
  return (
    <section
      className={`flex flex-col  border-b-[1px]  border-gBlue my-2 cursor-pointer ${
        num === 0 && "border-t-[1px]"
      }`}
      onClick={() => handleSelected(num)}
    >
      <article className="flex items-center justify-between my-4 group">
        <h5 className="font-medium duration-200 text-vDarkBlue group-hover:text-gBlue">
          {question.question}
        </h5>
        <img
          src="./assets/images/icon-arrow.svg"
          alt="arrow"
          className={isSelected === num && " rotate-180 grayscale "}
        />
      </article>
      {isSelected === num && (
        <p className="py-8 leading-relaxed text-justify text-vDarkBlue brightness-125 ">
          {question.text}
        </p>
      )}
    </section>
  );
}
