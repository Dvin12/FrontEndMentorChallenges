import Block from "./Block";
import "./countdown.css";

export default function Countdown(): JSX.Element {
  return (
    <section className="countdown">
      <Block>Days</Block>
      <Block>Hours</Block>
      <Block>Minutes</Block>
      <Block>Seconds</Block>
    </section>
  );
}
