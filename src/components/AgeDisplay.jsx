import { sub } from "date-fns";

export default function AgeDisplay({ day, month, year }) {
  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  const result = sub(new Date(currentYear, currentMonth, currentDay), {
    years: year,
    months: month,
    days: day,
  });

  const years = result.getFullYear();
  const months = result.getMonth();
  const days = result.getDate();

  return (
    <div className="display-date">
      <p>
        <span>{years === currentYear ? "--" : years}</span>years
      </p>
      <p>
        <span>{months === currentMonth ? "--" : months}</span>months
      </p>
      <p>
        <span>{days === currentDay ? "--" : days - 1}</span>days
      </p>
    </div>
  );
}
