import { ReactNode } from 'react';

export default function KamOS({ children }: { children: ReactNode }) {
  return <div className="w-screen h-screen m-0">{children}</div>;
}
