
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-bradesco-red flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">L</span>
              </div>
              <span className="font-display font-semibold text-lg">
                Low Code Hub
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Automatizando e facilitando o desenvolvimento para a tribo de
              Engenharia de Plataforma do Bradesco
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-bradesco-red flex items-center justify-center text-white">
                B
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-display font-semibold mb-4">Plataformas</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/power-automate" className="text-gray-600 hover:text-bradesco-red transition-colors">
                  Power Automate
                </Link>
              </li>
              <li>
                <Link to="/automation-anywhere" className="text-gray-600 hover:text-bradesco-red transition-colors">
                  Automation Anywhere
                </Link>
              </li>
              <li>
                <Link to="/service-now" className="text-gray-600 hover:text-bradesco-red transition-colors">
                  ServiceNow
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-display font-semibold mb-4">Links Rápidos</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-bradesco-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-bradesco-red transition-colors">
                  Tribo de Engenharia
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-bradesco-red transition-colors">
                  Bradesco
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Low Code Hub - Todos os direitos reservados
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-bradesco-red transition-colors text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-500 hover:text-bradesco-red transition-colors text-sm">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
