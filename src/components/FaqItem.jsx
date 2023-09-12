export default function FaqItem({ question, num, handleSelected, isSelected }) {
  return (
    <section
      className="flex flex-col  border-b-[1px] border-gBlue my-2 cursor-pointer"
      onClick={() => handleSelected(num)}
    >
      <article className="flex items-center justify-between my-4">
        <h5 className="font-medium text-vDarkBlue">{question.question}</h5>
        <img
          src="./assets/images/icon-arrow.svg"
          alt="arrow"
          className={isSelected === num && " rotate-180 grayscale "}
        />
      </article>
      {isSelected === num && (
        <p className="py-8 leading-relaxed text-justify text-vDarkBlue brightness-150 ">
          {question.text}
        </p>
      )}
    </section>
  );
}
