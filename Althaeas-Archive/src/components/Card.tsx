import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`border border-neutral-300 rounded-sm p-4 bg-white ${className}`}
    >
      {children}
    </div>
  );
}
