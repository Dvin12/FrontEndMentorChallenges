import Button from "./Button";
import MobileCarousel from "./MobileCarousel";

const testimonials = [
  {
    name: "Anisha Li",
    image: "public/assets/images/avatar-anisha.png",
    text: "Manage has supercharged our team workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },

  {
    name: "Ali Bravo",
    image: "public/assets/images/avatar-ali.png",
    text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },

  {
    name: "Richard Watts",
    image: "public/assets/images/avatar-richard.png",
    text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
  },

  {
    name: "Shanai Gough",
    image: "public/assets/images/avatar-shanai.png",
    text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intruisive.",
  },
];

export default function Testimonials() {
  return (
    <article className="flex flex-col items-center justify-center text-center">
      <h3 className="text-3xl font-semibold text-darkBlue">
        What they've said
      </h3>
      <MobileCarousel testimonials={testimonials} />
      <div className="my-8">
        <Button>Get Started</Button>
      </div>
    </article>
  );
}
