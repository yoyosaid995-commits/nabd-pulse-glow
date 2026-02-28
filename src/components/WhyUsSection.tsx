import { useEffect, useRef, useState } from "react";
import { BarChart3, Award, HeadphonesIcon, Target } from "lucide-react";

const stats = [
  { icon: BarChart3, label: "نتائج قابلة للقياس", value: 150, suffix: "+", desc: "مشروع ناجح" },
  { icon: Award, label: "خبرة احترافية", value: 8, suffix: "+", desc: "سنوات من الخبرة" },
  { icon: HeadphonesIcon, label: "دعم مستمر", value: 24, suffix: "/7", desc: "دعم فني متواصل" },
  { icon: Target, label: "استراتيجيات مخصصة", value: 98, suffix: "%", desc: "رضا العملاء" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-gradient">
      {count}{suffix}
    </div>
  );
};

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="absolute inset-0 hero-blob opacity-30" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            لماذا <span className="text-gradient">تختارنا؟</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            نلتزم بتقديم أعلى معايير الجودة والاحترافية في كل مشروع
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-card border border-border rounded-2xl p-8 card-glow-hover opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-purple flex items-center justify-center mx-auto mb-5">
                <stat.icon size={28} className="text-primary-foreground" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <h3 className="font-bold mt-3 mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
