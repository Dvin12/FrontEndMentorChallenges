export default function Background({ image }) {
  return (
    <div className="md:col-span-1">
      <img
        src={`./assets/images/${image}`}
        alt=""
        className="md:w-screen md:h-screen w-full h-full"
      />
    </div>
  );
}
