import Button from "./Button";
import DesktopTestimonials from "./DesktopTestimonials";
import MobileCarousel from "./MobileCarousel";

const testimonials = [
  {
    name: "Anisha Li",
    image: "./assets/images/avatar-anisha.png",
    text: "Manage has supercharged our team workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },

  {
    name: "Ali Bravo",
    image: "./assets/images/avatar-ali.png",
    text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },

  {
    name: "Richard Watts",
    image: "./assets/images/avatar-richard.png",
    text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
  },

  {
    name: "Shanai Gough",
    image: "./assets/images/avatar-shanai.png",
    text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intruisive.",
  },
];

export default function Testimonials() {
  return (
    <article className="flex flex-col items-center justify-center text-center xl:my-24">
      <h3 className="text-3xl font-semibold text-darkBlue xl:text-4xl">
        What they've said
      </h3>
      <MobileCarousel testimonials={testimonials} />
      <DesktopTestimonials testimonials={testimonials} />
      <div className="my-8 xl:my-20">
        <Button>Get Started</Button>
      </div>
    </article>
  );
}
