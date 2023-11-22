export default function Block(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="time">
      <div className="time-group">
        <div className="time-segment">
          <div className="segment-display">
            <div className="segment-display-top">0</div>
            <div className="segment-display-bottom">0</div>
            <div className="segment-overlay">
              <div className="segment-overlay-top">0</div>
              <div className="segment-overlay-bottom">0</div>
            </div>
          </div>
        </div>
        <div className="time-segment">
          <div className="segment-display">
            <div className="segment-display-top">0</div>
            <div className="segment-display-bottom">0</div>
            <div className="segment-overlay">
              <div className="segment-overlay-top">0</div>
              <div className="segment-overlay-bottom">0</div>
            </div>
          </div>
        </div>
      </div>
      <p>{props.children}</p>
    </div>
  );
}
