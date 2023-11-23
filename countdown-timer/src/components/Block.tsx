import { useEffect, useState } from "react";

interface BlockProps {
  timerDays?: number;
  timerHours?: number;
  timerMinutes?: number;
  timerSeconds?: number;
}

export default function Block({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}: BlockProps): React.ReactElement {
  const [prevDays, setPrevDays] = useState(timerDays);
  const [prevHours, setPrevHours] = useState(timerHours);
  const [prevMinutes, setPrevMinutes] = useState(timerMinutes);
  const [prevSeconds, setPrevSeconds] = useState(timerSeconds);

  const timeOver =
    timerDays === 0 &&
    timerHours == 0 &&
    timerMinutes === 0 &&
    timerSeconds === 0;

  useEffect(() => {
    if (prevDays !== timerDays) {
      setTimeout(() => {
        setPrevDays(timerDays);
      }, 500);
    }

    if (prevHours !== timerHours) {
      setTimeout(() => {
        setPrevHours(timerHours);
      }, 500);
    }

    if (prevMinutes !== timerMinutes) {
      setTimeout(() => {
        setPrevMinutes(timerMinutes);
      }, 500);
    }

    if (prevSeconds !== timerSeconds) {
      setTimeout(() => {
        setPrevSeconds(timerSeconds);
      }, 500);
    }
  }, [
    timerDays,
    timerHours,
    timerMinutes,
    timerSeconds,
    prevDays,
    prevHours,
    prevMinutes,
    prevSeconds,
  ]);

  return (
    <>
      {timeOver ? (
        <p>CONGRATULATIONS! YOU HAVE WASTED YOUR TIME FOR NOTHING! XD</p>
      ) : (
        <>
          <div className="time">
            <div className="time-group">
              <div className="time-segment">
                <div className="segment-display">
                  <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <div className="segment-display-top">{timerDays}</div>
                  <div className="segment-display-bottom">{timerDays}</div>
                  <div
                    className={`segment-overlay ${
                      timerDays !== prevDays && "flip"
                    }`}
                  >
                    <div className="segment-overlay-top">{timerDays}</div>
                    <div className="segment-overlay-bottom">{timerDays}</div>
                  </div>
                </div>
              </div>
            </div>
            <p>Days</p>
          </div>

          <div className="time">
            <div className="time-group">
              <div className="time-segment">
                <div className="segment-display">
                  <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <div className="segment-display-top">{timerHours}</div>
                  <div className="segment-display-bottom">{timerHours}</div>
                  <div
                    className={`segment-overlay ${
                      timerHours !== prevHours && "flip"
                    }`}
                  >
                    <div className="segment-overlay-top">{timerHours}</div>
                    <div className="segment-overlay-bottom">{timerHours}</div>
                  </div>
                </div>
              </div>
            </div>
            <p>Hours</p>
          </div>

          <div className="time">
            <div className="time-group">
              <div className="time-segment">
                <div className="segment-display">
                  <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <div className="segment-display-top">{timerMinutes}</div>
                  <div className="segment-display-bottom">{timerMinutes}</div>
                  <div
                    className={`segment-overlay ${
                      timerMinutes !== prevMinutes && "flip"
                    }`}
                  >
                    <div className="segment-overlay-top">{timerMinutes}</div>
                    <div className="segment-overlay-bottom">{timerMinutes}</div>
                  </div>
                </div>
              </div>
            </div>
            <p>Minutes</p>
          </div>

          <div className="time">
            <div className="time-group">
              <div className="time-segment">
                <div className="segment-display">
                  <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <div className="segment-display-top">{timerSeconds}</div>
                  <div className="segment-display-bottom">{timerSeconds}</div>
                  <div
                    className={`segment-overlay ${
                      timerSeconds !== prevSeconds && "flip"
                    }`}
                  >
                    <div className="segment-overlay-top">{timerSeconds}</div>
                    <div className="segment-overlay-bottom">{timerSeconds}</div>
                  </div>
                </div>
              </div>
            </div>
            <p>Seconds</p>
          </div>
        </>
      )}
    </>
  );
}
