import { ReactNode } from "react";

interface ComponentProps {
  children?: ReactNode;
}

export default function Main({ children }: ComponentProps): JSX.Element {
  return <main className="relative  font-LeagueSpartan">{children}</main>;
}
