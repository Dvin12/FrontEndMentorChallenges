import { useRouteError } from "react-router-dom";

interface CustomError {
  status: number;
  statusText: string;
  message: string;
}

export default function Error(): JSX.Element {
  const error = useRouteError();
  const customError = error as CustomError;

  console.log(error);

  return (
    <header className="h-screen w-screen bg-[url('./assets/images/stranded.jpg')] bg-cover bg-center  ">
      <section className=" flex h-screen flex-col items-center justify-center gap-6 bg-darkBlue/80 text-center font-barlow text-xl tracking-wide text-white">
        <h1 className=" font-bellefair text-7xl uppercase tracking-widest">
          You're stranded!
        </h1>
        <p>Seems like you have ventured too far into the uknown...</p>
        <div className="flex  items-center justify-center gap-2 text-sm">
          <span>{customError?.status}</span>
          <p>
            {customError?.statusText ||
              customError?.message ||
              "An error has occurred"}
          </p>
        </div>
      </section>
    </header>
  );
}
