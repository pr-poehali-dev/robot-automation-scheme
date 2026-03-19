import { useState, useEffect, useCallback } from "react";
import { slides } from "@/components/presentation/slides-data";
import { SlideRenderer } from "@/components/presentation/SlideTypes";
import { TopBar, BottomBar } from "@/components/presentation/PresentationNav";

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(total - 1, c + 1)), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const slide = slides[current];
  const label = slide.type === "title" ? "Титульный лист" : (slide as { label?: string }).label ?? "";

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <TopBar slides={slides} current={current} onDotClick={setCurrent} />

      <div className="flex-1 overflow-y-auto flex items-center justify-center">
        <div className="w-full animate-in fade-in duration-300">
          <SlideRenderer key={current} slide={slide} />
        </div>
      </div>

      <BottomBar current={current} total={total} label={label} onPrev={prev} onNext={next} />
    </div>
  );
}
