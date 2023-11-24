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
    <section>
      <h1>You're stranded!</h1>
      <p>Seems like you have ventured too far into the uknown...</p>
      <div>
        <span>{customError?.status}</span>
        <p>
          {customError?.statusText ||
            customError?.message ||
            "An error has occurred"}
        </p>
      </div>
    </section>
  );
}
