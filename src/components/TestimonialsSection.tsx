import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد الشمري",
    role: "مؤسس متجر إلكتروني",
    text: "فريق نبض ساعدنا في مضاعفة مبيعاتنا خلال 3 أشهر فقط من خلال إدارة حملات إعلانية احترافية.",
  },
  {
    name: "سارة القحطاني",
    role: "مديرة تسويق",
    text: "تعاملنا مع نبض كان من أفضل القرارات. التزامهم بالمواعيد وجودة العمل استثنائية.",
  },
  {
    name: "محمد العتيبي",
    role: "صاحب شركة عقارات",
    text: "الموقع الذي صممه فريق نبض رفع نسبة التحويل بشكل ملحوظ. شكراً لكم على الاحترافية.",
  },
  {
    name: "نورة الدوسري",
    role: "رائدة أعمال",
    text: "الهوية البصرية التي صممها نبض أعطت علامتنا التجارية شخصية مميزة ومحترفة.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 hero-blob-2 opacity-20" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">آراء عملائنا</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            ثقة عملائنا هي أكبر إنجازاتنا
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center relative">
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>

            <p className="text-lg leading-relaxed mb-6 min-h-[80px]">
              "{testimonials[current].text}"
            </p>

            <div className="w-14 h-14 rounded-full bg-gradient-purple mx-auto mb-3 flex items-center justify-center text-primary-foreground font-bold text-xl">
              {testimonials[current].name[0]}
            </div>
            <h4 className="font-bold">{testimonials[current].name}</h4>
            <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gradient-purple w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
