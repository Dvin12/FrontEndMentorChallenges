export default function Result() {
  return (
    <section className="bg-gradient-to-b from-[hsl(252,100%,67%)] from to-[hsl(241,81%,54%)] md:rounded-3xl rounded-b-[60px] flex ">
      <div className="flex flex-col  justify-center w-full items-center  ">
        <h3 className="text-2xl font-medium text-[hsl(221,100%,96%)]  md:pb-9 py-4 md:py-4 ">
          Your Result
        </h3>
        <div className="bg= w-[180px] h-[180px] rounded-full flex items-center justify-center flex-col bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] my-4 md:my-0 ">
          <span className="text-7xl font-extrabold text-white">76</span>
          <span className="text-[hsl(221,100%,96%)]">of 100</span>
        </div>
        <span className="text-3xl text-[hsl(221,100%,96%)] py-2 md:py-4">
          Great
        </span>
        <p className="md:w-[230px] w-[290px]  text-center text-[hsl(221,100%,96%)]  pb-12  flex ">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
}
