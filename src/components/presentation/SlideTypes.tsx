import Icon from "@/components/ui/icon";
import type { Slide } from "./slides-data";

function SlideTitle({ slide }: { slide: Slide }) {
  const c = slide.content as { title: string; subtitle: string; meta: string[] };
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <div className="w-px h-16 bg-border mb-10" />
      <span className="text-sm uppercase tracking-widest text-sage mb-4 block">
        Судебная риторика
      </span>
      <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-foreground leading-tight mb-6">
        {c.title}
      </h1>
      <p className="font-serif text-2xl md:text-3xl italic text-muted-foreground mb-10">
        {c.subtitle}
      </p>
      <div className="w-px h-8 bg-border mb-8" />
      {c.meta.map((m, i) => (
        <p key={i} className="text-sm text-muted-foreground tracking-wide">
          {m}
        </p>
      ))}
    </div>
  );
}

function SlideIntro({ slide }: { slide: Slide }) {
  const c = slide.content as { title: string; thesis: string; question: string; quote: string };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-6 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">{c.title}</h2>
      <div className="space-y-6">
        <p className="text-lg text-foreground leading-relaxed border-l-2 border-sage pl-4">{c.thesis}</p>
        <p className="text-base text-muted-foreground leading-relaxed">{c.question}</p>
        <div className="p-6 bg-card rounded-xl border border-border">
          <p className="font-serif text-lg italic text-foreground">{c.quote}</p>
        </div>
      </div>
    </div>
  );
}

function SlideLaw({ slide }: { slide: Slide }) {
  const c = slide.content as { title: string; allowed: string[]; forbidden: string[]; source: string };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">{c.title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-sage/10 rounded-xl border border-sage/20">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="CheckCircle" size={20} className="text-sage" />
            <span className="font-medium text-foreground">Разрешено</span>
          </div>
          <ul className="space-y-3">
            {c.allowed.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-red-50 rounded-xl border border-red-100">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="XCircle" size={20} className="text-red-500" />
            <span className="font-medium text-foreground">Запрещено</span>
          </div>
          <ul className="space-y-3">
            {c.forbidden.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4 text-right">Источник: {c.source}</p>
    </div>
  );
}

function SlideRhetoric({ slide }: { slide: Slide }) {
  const c = slide.content as { title: string; subtitle: string; techniques: { num: string; title: string; body: string }[] };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">{c.title}</h2>
      <p className="text-muted-foreground mb-8 text-sm">{c.subtitle}</p>
      <div className="space-y-4">
        {c.techniques.map((t) => (
          <div key={t.num} className="flex gap-5 p-5 bg-card rounded-xl border border-border">
            <span className="font-serif text-2xl text-terracotta shrink-0">{t.num}</span>
            <div>
              <p className="font-medium text-foreground mb-1">{t.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideExample({ slide }: { slide: Slide }) {
  const c = slide.content as { title: string; badge: string; situation: string; speech: string; conclusion: string };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground">{c.title}</h2>
        <span className="text-xs px-3 py-1 bg-sage/10 text-sage rounded-full border border-sage/20">{c.badge}</span>
      </div>
      <div className="space-y-5">
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <p className="text-xs uppercase tracking-widest text-amber-600 mb-1">Ситуация</p>
          <p className="text-sm text-foreground leading-relaxed">{c.situation}</p>
        </div>
        <div className="p-5 bg-card rounded-xl border border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Речь адвоката</p>
          <p className="font-serif text-base italic text-foreground leading-relaxed">{c.speech}</p>
        </div>
        <div className="flex items-start gap-3 p-4 bg-sage/10 rounded-lg border border-sage/20">
          <Icon name="CheckCircle" size={18} className="text-sage mt-0.5 shrink-0" />
          <p className="text-sm text-foreground leading-relaxed">{c.conclusion}</p>
        </div>
      </div>
    </div>
  );
}

function SlideRedline({ slide }: { slide: Slide }) {
  const c = slide.content as { title: string; subtitle: string; cases: { icon: string; color: string; bg: string; label: string; text: string }[] };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-red-500 mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">{c.title}</h2>
      <p className="text-muted-foreground text-sm mb-8">{c.subtitle}</p>
      <div className="space-y-4">
        {c.cases.map((item, i) => (
          <div key={i} className={`flex gap-4 p-5 rounded-xl border ${item.bg} border-opacity-20`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.bg}`}>
              <Icon name={item.icon as "X" | "AlertCircle"} size={16} className={item.color} />
            </div>
            <div>
              <p className={`text-sm font-semibold mb-1 ${item.color}`}>{item.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideHistorical({ slide }: { slide: Slide }) {
  const c = slide.content as { title: string; subtitle: string; situation: string; speech: string; analysis: string; result: string };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-amber mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-1">{c.title}</h2>
      <p className="text-muted-foreground text-sm mb-6">{c.subtitle}</p>
      <div className="space-y-4">
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <p className="text-xs uppercase tracking-widest text-amber-600 mb-1">Ситуация</p>
          <p className="text-sm text-foreground">{c.situation}</p>
        </div>
        <div className="p-5 bg-card rounded-xl border border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Речь Плевако</p>
          <p className="font-serif text-sm italic text-foreground leading-relaxed">{c.speech}</p>
        </div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 p-4 bg-sage/10 rounded-lg border border-sage/20 flex-1">
            <Icon name="Info" size={16} className="text-sage mt-0.5 shrink-0" />
            <p className="text-xs text-foreground leading-relaxed">{c.analysis}</p>
          </div>
          <div className="px-4 py-3 bg-sage text-white rounded-lg text-center shrink-0">
            <p className="text-xs font-medium">{c.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideDilemma({ slide }: { slide: Slide }) {
  const c = slide.content as { title: string; quote: string; author: string; questions: string[] };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">{c.title}</h2>
      <div className="p-8 bg-card rounded-xl border border-border mb-8">
        <p className="font-serif text-xl md:text-2xl italic text-foreground leading-relaxed mb-4">{c.quote}</p>
        <p className="text-sm text-muted-foreground">— {c.author}</p>
      </div>
      <div className="space-y-4">
        {c.questions.map((q, i) => (
          <div key={i} className="flex gap-4 p-4 bg-background rounded-lg border border-border">
            <span className="font-serif text-lg text-terracotta shrink-0">?</span>
            <p className="text-sm text-muted-foreground leading-relaxed">{q}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideConclusion({ slide }: { slide: Slide }) {
  const c = slide.content as { title: string; formula: string; points: { icon: string; title: string; text: string; color: string; bg: string }[] };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{c.title}</h2>
      <div className="p-5 bg-card rounded-xl border border-border mb-6">
        <p className="font-serif text-lg text-foreground italic">{c.formula}</p>
      </div>
      <div className="space-y-4">
        {c.points.map((p, i) => (
          <div key={i} className={`flex gap-4 p-4 rounded-xl border ${p.bg}`}>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${p.bg}`}>
              <Icon name={p.icon as "Scale" | "Ban" | "Gavel"} size={18} className={p.color} />
            </div>
            <div>
              <p className={`font-medium text-sm mb-0.5 ${p.color}`}>{p.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideReferences({ slide }: { slide: Slide }) {
  const c = slide.content as { title: string; items: { num: string; text: string }[] };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-3xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-10">{c.title}</h2>
      <div className="space-y-5">
        {c.items.map((item) => (
          <div key={item.num} className="flex items-center gap-5 border-b border-border pb-5">
            <span className="font-serif text-3xl text-border shrink-0">{item.num}</span>
            <p className="text-foreground leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SlideRenderer({ slide }: { slide: Slide }) {
  switch (slide.type) {
    case "title":      return <SlideTitle slide={slide} />;
    case "intro":      return <SlideIntro slide={slide} />;
    case "law":        return <SlideLaw slide={slide} />;
    case "rhetoric":   return <SlideRhetoric slide={slide} />;
    case "example":    return <SlideExample slide={slide} />;
    case "redline":    return <SlideRedline slide={slide} />;
    case "historical": return <SlideHistorical slide={slide} />;
    case "dilemma":    return <SlideDilemma slide={slide} />;
    case "conclusion": return <SlideConclusion slide={slide} />;
    case "references": return <SlideReferences slide={slide} />;
    default:           return null;
  }
}
