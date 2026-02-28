import { Megaphone, Share2, Globe, Palette, FileSearch, Search } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "إدارة الحملات الإعلانية الممولة",
    desc: "إدارة حملات Meta و Google Ads بأعلى كفاءة لتحقيق أفضل عائد استثمار.",
  },
  {
    icon: Share2,
    title: "إدارة حسابات السوشيال ميديا",
    desc: "تطوير وإدارة حساباتك على جميع منصات التواصل الاجتماعي باحترافية.",
  },
  {
    icon: Globe,
    title: "تصميم وتطوير المواقع الإلكترونية",
    desc: "مواقع عصرية وسريعة ومتجاوبة مع جميع الأجهزة لتجربة مستخدم مثالية.",
  },
  {
    icon: Palette,
    title: "تصميم الهوية البصرية",
    desc: "هوية بصرية مميزة تعكس قيم علامتك التجارية وتترك انطباعاً دائماً.",
  },
  {
    icon: FileSearch,
    title: "إعداد الأبحاث وخطط التسويق",
    desc: "أبحاث سوقية دقيقة وخطط تسويقية مبنية على البيانات لتحقيق أهدافك.",
  },
  {
    icon: Search,
    title: "تحسين الظهور في محركات البحث",
    desc: "استراتيجيات SEO متقدمة لتصدر نتائج البحث وزيادة الزيارات العضوية.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">خدماتنا</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            نقدم مجموعة متكاملة من الحلول الرقمية لدفع نمو أعمالك
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-2xl p-7 card-glow-hover cursor-default opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-purple flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
