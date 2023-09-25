import GbLeft from "./GbLeft";
import Slider from "./Slider";

export default function CardStorage() {
  return (
    <article className="bg-[hsl(228,56%,26%)] w-full md:w-[800px] h-[180px] rounded-xl drop-shadow-2xl px-10 py-12 relative">
      <p className="text-[hsl(243,100%,93%)] tracking-wide">
        You've used <strong>815 GB</strong> of your storage
      </p>
      <GbLeft />
      <Slider />
    </article>
  );
}
