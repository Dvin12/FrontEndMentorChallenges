import { useEffect, useRef, useState } from "react";
import Block from "./Block";
import "./countdown.css";

export default function Countdown(): JSX.Element {
  const [timerDays, setTimerDays] = useState(182);
  const [timerHours, setTimerHours] = useState(7);
  const [timerMinutes, setTimerMinutes] = useState(39);
  const [timerSeconds, setTimerSeconds] = useState(40);

  const interval = useRef<number>();

  function startTimer() {
    const countdownDate = new Date("May 24, 2024 00:00:00").getTime();

    interval.current = window.setInterval(() => {
      const present = new Date().getTime();
      const distance = countdownDate - present;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  }

  useEffect(() => {
    startTimer();

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  });

  return (
    <section className="countdown">
      <Block
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </section>
  );
}
