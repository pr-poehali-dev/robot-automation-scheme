import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    type: "title",
    content: {
      title: "Судебная этика",
      subtitle: "Грань между защитой и ложью",
      meta: ["Предметная область: Риторика и юриспруденция"],
    },
  },
  {
    id: 2,
    type: "intro",
    label: "Введение",
    content: {
      title: "В чём проблема?",
      thesis:
        "Адвокат — это «говорящий» инструмент правосудия. Его главное оружие — слово.",
      question:
        "Где заканчивается профессиональная защита (риторическое мастерство) и начинается ложь, за которую должно наступать наказание или осуждение?",
      quote:
        "«Чем хуже клиент, тем лучше должен быть адвокат». Но есть ли предел?",
    },
  },
  {
    id: 3,
    type: "law",
    label: "Правовая основа",
    content: {
      title: "Сухой закон",
      allowed: [
        "Адвокат может защищать интересы любыми средствами, не запрещёнными законом",
        "Презумпция невиновности: обязанность доказывать лежит на обвинении",
        "Адвокат не вправе отказаться от принятой защиты",
      ],
      forbidden: [
        "Давать заведомо ложные показания",
        "Фальсифицировать доказательства",
        "Сознательно использовать подложные документы",
        "Занимать позицию вопреки воле доверителя",
      ],
      source: "ст. 7 Кодекса профессиональной этики адвоката",
    },
  },
  {
    id: 4,
    type: "rhetoric",
    label: "Риторический аспект",
    content: {
      title: "Поле для маневра",
      subtitle:
        "Если факты против подзащитного — здесь начинается риторика как искусство",
      techniques: [
        {
          num: "01",
          title: "Интерпретация фактов (Рефрейминг)",
          body: "Изменить угол зрения. Факт — удар. Интерпретация: «Это была вынужденная самооборона». Грань: адвокат не может выдумать несуществующий факт, но может искать контекст для реального.",
        },
        {
          num: "02",
          title: "Акцент на процессе, а не на факте",
          body: "Атаковать следствие: «Доказательства получены с нарушением, обыск прошёл незаконно, протоколы составлены задним числом».",
        },
        {
          num: "03",
          title: "Работа с личностью",
          body: "Смещение фокуса с «Что сделал?» на «Кто сделал?». Характеристики, смягчающие обстоятельства, положительные качества.",
        },
      ],
    },
  },
  {
    id: 5,
    type: "example",
    label: "Иллюстрация грани",
    content: {
      title: "Приём «Прокурор не доказал»",
      badge: "Классический и этичный приём",
      situation:
        "Подзащитный явно виновен, но доказательств недостаточно для вынесения приговора.",
      speech:
        "«Уважаемый суд! Обвинение не представило убедительных доказательств. Их версия строится на предположениях. Мой подзащитный не обязан доказывать свою невиновность. Раз есть сомнения — они должны трактоваться в его пользу».",
      conclusion:
        "Адвокат не утверждает, что подзащитный невиновен — он лишь констатирует слабость позиции обвинения. Это не ложь.",
    },
  },
  {
    id: 6,
    type: "redline",
    label: "Красная линия",
    content: {
      title: "Где начинается ложь?",
      subtitle: "Переход количества в качество",
      cases: [
        {
          icon: "X",
          color: "text-red-500",
          bg: "bg-red-50",
          label: "Ложь",
          text: "Адвокат утверждает, что подзащитного не было на месте преступления, хотя знает от самого подзащитного, что тот там был.",
        },
        {
          icon: "X",
          color: "text-red-500",
          bg: "bg-red-50",
          label: "Подстрекательство",
          text: "Адвокат советует подзащитному дать ложные показания или уговорить свидетеля соврать.",
        },
        {
          icon: "AlertCircle",
          color: "text-amber-600",
          bg: "bg-amber-50",
          label: "Факт vs Мнение",
          text: "Адвокат может высказывать версии и предположения. Но если он выдаёт версию за свершившийся факт, зная об обратном — это ложь.",
        },
      ],
    },
  },
  {
    id: 7,
    type: "historical",
    label: "Исторический пример",
    content: {
      title: "Фёдор Плевако",
      subtitle: "Дело о краже чайника",
      situation:
        "Старушка украла жестяной чайник. Прокурор заранее сказал: «Собственность священна — Русь тысячу лет держалась на этом».",
      speech:
        "«Много бед и испытаний пришлось перенести России за тысячу лет. Печенеги терзали её, половцы, татары, поляки. Двенадцать языков обрушились на неё, взяли Москву. Всё вытерпела, всё превозмогла Россия... Но теперь — старушка украла старый чайник в 30 копеек. Этого Россия уж, конечно, не выдержит, от этого она погибнет безвозвратно».",
      analysis:
        "Плевако не отрицал кражу. Он довёл аргумент прокурора до абсурда с помощью гиперболы и иронии. Старушку оправдали. Это этичный приём.",
      result: "Оправдательный приговор",
    },
  },
  {
    id: 8,
    type: "dilemma",
    label: "Моральный выбор",
    content: {
      title: "Современная дилемма",
      quote:
        "«Адвокат — это не рупор клиента. Это его защитник. Но если рупор искажает голос — это плохой рупор. А если защитник искажает правду — он предаёт правосудие».",
      author: "Роберт Джексон, судья Верховного суда США",
      questions: [
        "Если адвокат знает на 100%, что его подзащитный — опасный преступник, и добивается его оправдания из-за процессуальных ошибок — поступает ли он нравственно?",
        "Или его долг выше морали — он защищает не человека, а Конституцию, которая гласит: нельзя осудить без железных доказательств?",
      ],
    },
  },
  {
    id: 9,
    type: "conclusion",
    label: "Выводы",
    content: {
      title: "Формула грани",
      formula:
        "Грань проходит там, где заканчивается версия и начинается подмена фактов",
      points: [
        {
          icon: "Scale",
          title: "Риторика защиты",
          text: "Работа с контекстом, интерпретацией и процессуальными нормами",
          color: "text-sage",
          bg: "bg-sage/10",
        },
        {
          icon: "Ban",
          title: "Ложь",
          text: "Работа с вымыслом, фальсификацией и подстрекательством",
          color: "text-red-500",
          bg: "bg-red-50",
        },
        {
          icon: "Gavel",
          title: "Задача адвоката",
          text: "Используя всё риторическое мастерство, не переступить черту, за которой он из слуги закона превращается в соучастника преступления",
          color: "text-terracotta",
          bg: "bg-terracotta/10",
        },
      ],
    },
  },
  {
    id: 10,
    type: "references",
    label: "Литература",
    content: {
      title: "Список литературы",
      items: [
        {
          num: "01",
          text: "Кодекс профессиональной этики адвоката",
        },
        {
          num: "02",
          text: "Сборники речей Ф.Н. Плевако",
        },
        {
          num: "03",
          text: "Сборники речей А.Ф. Кони",
        },
        {
          num: "04",
          text: "Статьи по судебной риторике и этике",
        },
      ],
    },
  },
];

function SlideTitle({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as {
    title: string;
    subtitle: string;
    meta: string[];
  };
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

function SlideIntro({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as {
    title: string;
    thesis: string;
    question: string;
    quote: string;
  };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-6 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
        {c.title}
      </h2>
      <div className="space-y-6">
        <p className="text-lg text-foreground leading-relaxed border-l-2 border-sage pl-4">
          {c.thesis}
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          {c.question}
        </p>
        <div className="p-6 bg-card rounded-xl border border-border">
          <p className="font-serif text-lg italic text-foreground">{c.quote}</p>
        </div>
      </div>
    </div>
  );
}

function SlideLaw({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as {
    title: string;
    allowed: string[];
    forbidden: string[];
    source: string;
  };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
        {c.title}
      </h2>
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
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </span>
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
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4 text-right">
        Источник: {c.source}
      </p>
    </div>
  );
}

function SlideRhetoric({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as {
    title: string;
    subtitle: string;
    techniques: { num: string; title: string; body: string }[];
  };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-5xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">
        {c.title}
      </h2>
      <p className="text-muted-foreground mb-8 text-sm">{c.subtitle}</p>
      <div className="space-y-4">
        {c.techniques.map((t) => (
          <div
            key={t.num}
            className="flex gap-5 p-5 bg-card rounded-xl border border-border"
          >
            <span className="font-serif text-2xl text-terracotta shrink-0">
              {t.num}
            </span>
            <div>
              <p className="font-medium text-foreground mb-1">{t.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideExample({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as {
    title: string;
    badge: string;
    situation: string;
    speech: string;
    conclusion: string;
  };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground">
          {c.title}
        </h2>
        <span className="text-xs px-3 py-1 bg-sage/10 text-sage rounded-full border border-sage/20">
          {c.badge}
        </span>
      </div>
      <div className="space-y-5">
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <p className="text-xs uppercase tracking-widest text-amber-600 mb-1">
            Ситуация
          </p>
          <p className="text-sm text-foreground leading-relaxed">{c.situation}</p>
        </div>
        <div className="p-5 bg-card rounded-xl border border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Речь адвоката
          </p>
          <p className="font-serif text-base italic text-foreground leading-relaxed">
            {c.speech}
          </p>
        </div>
        <div className="flex items-start gap-3 p-4 bg-sage/10 rounded-lg border border-sage/20">
          <Icon name="CheckCircle" size={18} className="text-sage mt-0.5 shrink-0" />
          <p className="text-sm text-foreground leading-relaxed">{c.conclusion}</p>
        </div>
      </div>
    </div>
  );
}

function SlideRedline({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as {
    title: string;
    subtitle: string;
    cases: { icon: string; color: string; bg: string; label: string; text: string }[];
  };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-red-500 mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-2">
        {c.title}
      </h2>
      <p className="text-muted-foreground text-sm mb-8">{c.subtitle}</p>
      <div className="space-y-4">
        {c.cases.map((item, i) => (
          <div key={i} className={`flex gap-4 p-5 rounded-xl border ${item.bg} border-opacity-20`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${item.bg}`}>
              <Icon name={item.icon as "X" | "AlertCircle"} size={16} className={item.color} />
            </div>
            <div>
              <p className={`text-sm font-semibold mb-1 ${item.color}`}>
                {item.label}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideHistorical({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as {
    title: string;
    subtitle: string;
    situation: string;
    speech: string;
    analysis: string;
    result: string;
  };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-amber mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-1">
        {c.title}
      </h2>
      <p className="text-muted-foreground text-sm mb-6">{c.subtitle}</p>
      <div className="space-y-4">
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
          <p className="text-xs uppercase tracking-widest text-amber-600 mb-1">
            Ситуация
          </p>
          <p className="text-sm text-foreground">{c.situation}</p>
        </div>
        <div className="p-5 bg-card rounded-xl border border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Речь Плевако
          </p>
          <p className="font-serif text-sm italic text-foreground leading-relaxed">
            {c.speech}
          </p>
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

function SlideDilemma({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as {
    title: string;
    quote: string;
    author: string;
    questions: string[];
  };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
        {c.title}
      </h2>
      <div className="p-8 bg-card rounded-xl border border-border mb-8">
        <p className="font-serif text-xl md:text-2xl italic text-foreground leading-relaxed mb-4">
          {c.quote}
        </p>
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

function SlideConclusion({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as {
    title: string;
    formula: string;
    points: { icon: string; title: string; text: string; color: string; bg: string }[];
  };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-4xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
        {c.title}
      </h2>
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

function SlideReferences({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as {
    title: string;
    items: { num: string; text: string }[];
  };
  return (
    <div className="flex flex-col justify-center h-full px-8 md:px-16 max-w-3xl mx-auto w-full">
      <span className="text-sm uppercase tracking-widest text-sage mb-4 block">
        {(slide as { label?: string }).label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-10">
        {c.title}
      </h2>
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

function SlideRenderer({ slide }: { slide: (typeof slides)[0] }) {
  switch (slide.type) {
    case "title":
      return <SlideTitle slide={slide} />;
    case "intro":
      return <SlideIntro slide={slide} />;
    case "law":
      return <SlideLaw slide={slide} />;
    case "rhetoric":
      return <SlideRhetoric slide={slide} />;
    case "example":
      return <SlideExample slide={slide} />;
    case "redline":
      return <SlideRedline slide={slide} />;
    case "historical":
      return <SlideHistorical slide={slide} />;
    case "dilemma":
      return <SlideDilemma slide={slide} />;
    case "conclusion":
      return <SlideConclusion slide={slide} />;
    case "references":
      return <SlideReferences slide={slide} />;
    default:
      return null;
  }
}

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

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
        <span className="font-serif text-lg text-foreground">Судебная этика</span>
        <div className="flex items-center gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground tabular-nums">
          {current + 1} / {total}
        </span>
      </div>

      {/* Slide area */}
      <div className="flex-1 overflow-y-auto flex items-center justify-center">
        <div className="w-full animate-in fade-in duration-300">
          <SlideRenderer key={current} slide={slide} />
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-border shrink-0">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all duration-200"
        >
          <Icon name="ChevronLeft" size={18} />
          Назад
        </button>

        <span className="text-xs text-muted-foreground">
          {slide.type === "title" ? "Титульный лист" : (slide as { label?: string }).label}
        </span>

        <button
          onClick={next}
          disabled={current === total - 1}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all duration-200"
        >
          Далее
          <Icon name="ChevronRight" size={18} />
        </button>
      </div>
    </div>
  );
}
