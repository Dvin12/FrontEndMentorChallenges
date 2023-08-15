export default function TodayCard({ card }) {
  return (
    <div className="flex flex-col gap-8 px-6 py-6 rounded-md bg-blue-50">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Page Views</span>
        <img src="./assets/images/icon-facebook.svg" alt="" />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold">87</span>
        <div className="flex items-center justify-center gap-1 font-bold text-green-600">
          <img src="./assets/images/icon-up.svg" alt="" />
          <span>3%</span>
        </div>
      </div>
    </div>
  );
}
