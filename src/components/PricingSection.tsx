import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    nameAr: "الأساسية",
    price: "1,500",
    period: "شهرياً",
    features: [
      "إدارة منصتين تواصل اجتماعي",
      "8 تصاميم شهرياً",
      "تقرير أداء شهري",
      "دعم عبر الإيميل",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    nameAr: "النمو",
    price: "3,500",
    period: "شهرياً",
    features: [
      "إدارة 4 منصات تواصل اجتماعي",
      "20 تصميم شهرياً",
      "حملات إعلانية ممولة",
      "تقارير أسبوعية مفصلة",
      "دعم أولوية عبر واتساب",
      "تحسين SEO أساسي",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    nameAr: "الاحترافية",
    price: "6,500",
    period: "شهرياً",
    features: [
      "إدارة جميع المنصات",
      "تصاميم غير محدودة",
      "حملات إعلانية متقدمة",
      "استراتيجية تسويقية شاملة",
      "مدير حساب مخصص",
      "تحسين SEO متقدم",
      "تقارير يومية",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">باقات الأسعار</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            اختر الباقة المناسبة لاحتياجات عملك
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border transition-all duration-500 opacity-0 animate-fade-up ${
                plan.highlighted
                  ? "bg-gradient-purple border-transparent glow-purple-lg scale-105"
                  : "bg-card border-border card-glow-hover"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold px-4 py-1.5 rounded-full">
                  الأكثر طلباً
                </div>
              )}
              <div className="text-center mb-6">
                <p className="text-sm font-semibold text-muted-foreground mb-1">{plan.name}</p>
                <h3 className="text-xl font-bold mb-3">{plan.nameAr}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">ر.س / {plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check size={18} className={plan.highlighted ? "text-primary-foreground mt-0.5 shrink-0" : "text-accent mt-0.5 shrink-0"} />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-xl font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-foreground text-background hover:opacity-90"
                    : "bg-gradient-purple text-primary-foreground hover:glow-purple"
                }`}
              >
                ابدأ الآن
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
