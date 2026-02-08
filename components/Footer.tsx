import Link from "next/link";
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="border-t-2 border-gold">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Navegação */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">Navegação</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="hover:text-gold transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-gold transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-gold transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-gold transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/servicos#start" className="hover:text-gold transition-colors">
                    Plano Start
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#select" className="hover:text-gold transition-colors">
                    Plano Select
                  </Link>
                </li>
                <li>
                  <Link href="/servicos#exclusive" className="hover:text-gold transition-colors">
                    Plano Exclusive
                  </Link>
                </li>
              </ul>
            </div>

            {/* Blog */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">Conteúdo</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/marketing-medico-guia-completo" className="hover:text-gold transition-colors">
                    Marketing Médico
                  </Link>
                </li>
                <li>
                  <Link href="/blog/seo-para-medicos" className="hover:text-gold transition-colors">
                    SEO para Médicos
                  </Link>
                </li>
                <li>
                  <Link href="/blog/google-ads-para-medicos" className="hover:text-gold transition-colors">
                    Google Ads
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-gold" />
                  <a href="https://wa.me/5521999999999" className="hover:text-gold transition-colors">
                    (21) 99999-9999
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-gold" />
                  <a href="mailto:contato@medgm.com.br" className="hover:text-gold transition-colors">
                    contato@medgm.com.br
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-gold mt-1" />
                  <span className="text-sm">Rio de Janeiro, RJ</span>
                </li>
              </ul>

              {/* Redes Sociais */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://instagram.com/medgm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://linkedin.com/company/medgm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://youtube.com/@medgm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:scale-110 transition-transform"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gold/20">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} MedGM — Consultoria de Marketing Médico. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
