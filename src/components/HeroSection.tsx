import { ArrowLeft, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background blobs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] hero-blob rounded-full animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] hero-blob-2 rounded-full animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] hero-blob rounded-full animate-float" />

      <div className="container relative z-10 text-center px-4">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          نحن نصنع{" "}
          <span className="text-gradient">نبض</span>{" "}
          علامتك التجارية
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          حلول احترافية في التسويق الرقمي، إدارة الحملات الإعلانية، تصميم
          المواقع، وإعداد الأبحاث.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#contact"
            className="bg-gradient-purple text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg glow-purple hover:glow-purple-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            اطلب استشارة مجانية
            <ArrowLeft size={20} />
          </a>
          <a
            href="#portfolio"
            className="border border-border px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary transition-all duration-300 flex items-center gap-2"
          >
            <Play size={18} />
            شاهد أعمالنا
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
