import { ReactNode, Suspense } from "react";
import { LoadingLayout } from "./LoadingLayout";

type Props = {
  children: ReactNode;
};

export const MobileLayout = ({ children }: Props) => {
  return <Suspense fallback={<LoadingLayout />}>{children}</Suspense>;
};
