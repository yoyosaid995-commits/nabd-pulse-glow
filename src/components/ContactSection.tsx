import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const serviceOptions = [
"إدارة الحملات الإعلانية",
"إدارة السوشيال ميديا",
"تصميم وتطوير المواقع",
"تصميم الهوية البصرية",
"إعداد الأبحاث والخطط التسويقية",
"تحسين محركات البحث SEO",
"أخرى"];


const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `مرحباً، أنا ${form.name}.\nالبريد: ${form.email}\nالهاتف: ${form.phone}\nالخدمة: ${form.service}\nالرسالة: ${form.message}`;
    window.open(
      `https://wa.me/966500000000?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">تواصل معنا</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            نحن هنا لمساعدتك في تحقيق أهدافك التسويقية
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 card-glow-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-purple flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">اتصل بنا</h4>
                  <p className="text-muted-foreground text-sm" dir="ltr">
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 card-glow-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-purple flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">
                  </h4>
                  <p className="text-muted-foreground text-sm">info@nabd.sa</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 card-glow-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-purple flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">الموقع</h4>
                  <p className="text-muted-foreground text-sm">المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 space-y-5">

            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="الاسم الكامل"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" />

              <input
                type="tel"
                placeholder="رقم الهاتف"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" />

            </div>
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition" />

            <select
              required
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition">

              <option value="">اختر الخدمة</option>
              {serviceOptions.map((opt) =>
              <option key={opt} value={opt}>
                  {opt}
                </option>
              )}
            </select>
            <textarea
              placeholder="رسالتك..."
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none" />

            <button
              type="submit"
              className="w-full bg-gradient-purple text-primary-foreground py-3.5 rounded-xl font-bold text-lg glow-purple hover:glow-purple-lg transition-all duration-300 flex items-center justify-center gap-2">

              أرسل رسالتك
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>);

};

export default ContactSection;