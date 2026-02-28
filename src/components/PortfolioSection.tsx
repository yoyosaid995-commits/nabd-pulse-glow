import { useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["الكل", "إعلانات", "مواقع", "هويات بصرية"];

const projects = [
  { title: "حملة إعلانية لمتجر إلكتروني", category: "إعلانات", color: "from-purple-600 to-blue-600" },
  { title: "موقع شركة عقارات", category: "مواقع", color: "from-purple-600 to-pink-600" },
  { title: "هوية بصرية لمطعم فاخر", category: "هويات بصرية", color: "from-purple-600 to-orange-500" },
  { title: "حملة سوشيال ميديا", category: "إعلانات", color: "from-indigo-600 to-purple-600" },
  { title: "موقع عيادة طبية", category: "مواقع", color: "from-purple-600 to-teal-500" },
  { title: "هوية بصرية لشركة تقنية", category: "هويات بصرية", color: "from-violet-600 to-purple-600" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("الكل");

  const filtered = active === "الكل" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">أعمالنا</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            مجموعة مختارة من مشاريعنا الناجحة
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-purple text-primary-foreground glow-purple"
                  : "bg-secondary text-secondary-foreground hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden card-glow-hover opacity-0 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                <span className="text-5xl font-black text-white/10">نبض</span>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-purple flex items-center justify-center">
                    <ExternalLink size={20} className="text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-accent font-semibold">{project.category}</span>
                <h3 className="font-bold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
