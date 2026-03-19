import Icon from "@/components/ui/icon";
import type { Slide } from "./slides-data";

interface TopBarProps {
  slides: Slide[];
  current: number;
  onDotClick: (index: number) => void;
}

export function TopBar({ slides, current, onDotClick }: TopBarProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
      <span className="font-serif text-lg text-foreground">Судебная этика</span>
      <div className="flex items-center gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground tabular-nums">
        {current + 1} / {slides.length}
      </span>
    </div>
  );
}

interface BottomBarProps {
  current: number;
  total: number;
  label: string;
  onPrev: () => void;
  onNext: () => void;
}

export function BottomBar({ current, total, label, onPrev, onNext }: BottomBarProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-border shrink-0">
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all duration-200"
      >
        <Icon name="ChevronLeft" size={18} />
        Назад
      </button>
      <span className="text-xs text-muted-foreground">{label}</span>
      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all duration-200"
      >
        Далее
        <Icon name="ChevronRight" size={18} />
      </button>
    </div>
  );
}
