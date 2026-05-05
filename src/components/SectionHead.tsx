import type { ReactNode } from "react";

interface Props {
  kicker: string;
  title: ReactNode;
  description?: string;
}

export default function SectionHead({ kicker, title, description }: Props) {
  return (
    <div className="text-center mb-16">
      <span className="kicker">— {kicker} —</span>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="mt-4.5 text-[17px] text-ink-2 max-w-[600px] mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
