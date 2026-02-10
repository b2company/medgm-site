import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="border-t-2 border-gold">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gold/20">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} MedGM. Assessoria de Growth para Clínicas Médicas.
          </p>
        </div>
      </div>
    </footer>
  );
}
