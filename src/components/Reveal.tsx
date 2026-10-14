import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "../hooks";

interface Props {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  from?: "up" | "left" | "right" | "zoom";
}

export default function Reveal({ children, as: Tag = "div", delay = 0, className = "", from = "up" }: Props) {
  const [ref, shown] = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${from} ${shown ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
