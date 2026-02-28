import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "الرئيسية", href: "#hero" },
    { label: "خدماتنا", href: "#services" },
    { label: "أعمالنا", href: "#portfolio" },
    { label: "الأسعار", href: "#pricing" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  const socials = [
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Facebook, href: "#" },
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-2xl font-black text-gradient mb-3">نبض</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              وكالة متخصصة في التسويق الرقمي والحلول الإبداعية لتنمية أعمالك.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">تابعنا</h4>
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-gradient-purple hover:border-transparent transition-all duration-300 text-muted-foreground hover:text-primary-foreground"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 Nabd Advertising & Digital Solutions. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
