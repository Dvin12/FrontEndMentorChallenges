import Background from "./components/Background";
import Main from "./components/Main";
import Slider from "./components/Slider";

const testimonials = [
  {
    name: "Tanya Sinclair",
    position: "UX Engineer",
    text: "I've been intrested in coding for a while but never taken the jump. until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    image: "./assets/images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
    text: "If you want to lay the best foundtation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer",
    image: "./assets/images/image-john.jpg",
  },
];

export default function App() {
  return (
    <Main>
      <Background />
      {/* {testimonials.map((item, i) => (
        <Slider item={item} key={i} index={i} />
      ))} */}
      <Slider />
    </Main>
  );
}
