export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Çatalca Rehberi</h3>
            <p className="text-gray-400 text-sm">
              İstanbul&apos;un tarihi ilçesi Çatalca&apos;yı keşfedin. Doğal güzellikleri, tarihi mekanları ve yerel lezzetleriyle unutulmaz bir deneyim yaşayın.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/places" className="hover:text-white transition-colors">Gezilecek Yerler</a>
              </li>
              <li>
                <a href="/restaurants" className="hover:text-white transition-colors">Restoranlar</a>
              </li>
              <li>
                <a href="/hotels" className="hover:text-white transition-colors">Oteller</a>
              </li>
              <li>
                <a href="/events" className="hover:text-white transition-colors">Etkinlikler</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Çatalca, İstanbul</li>
              <li>📞 0212-XXX-XXXX</li>
              <li>✉️ info@catalca.gov.tr</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Çatalca Rehberi. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 