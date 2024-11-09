export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          {/* <img src="/path/to/logo.png" alt="Logo da Empresa" className="h-12 mb-4" /> */}
          <div className="flex flex-col items-start mb-4">
            <span className="text-xl font-bold">Tiago Forward</span>
            <span>Criações aromáticas</span>
          </div>

          <p className="text-md font-semibold mb-4">Redes sociais</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/tiagoforward_store/" target="_blank" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <p>Email: tiagoforwardstore@gmail.com</p>
          <p>Telefone: (83) 98623-6928</p>
          <p>Endereço: Campina Grande - PB</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Formas de Pagamento</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <img src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqcartavisatraycheckout.png?504a123343cfe530f0935d7be59f2b4b" alt="Cartão Visa - Vindi" className="h-8" />
            <img src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqmastercardtraycheckout.png?504a123343cfe530f0935d7be59f2b4b" alt="Cartão MasterCard - Vindi" className="h-8" />
            <img src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqdinerstraycheckout.png?504a123343cfe530f0935d7be59f2b4b" alt="Cartão Diners - Vindi" className="h-8" />
            <img src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqamextraycheckout.png?504a123343cfe530f0935d7be59f2b4b" alt="Cartão Amex - Vindi" className="h-8" />
            <img src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqelotraycheckout.png?504a123343cfe530f0935d7be59f2b4b" alt="Cartão Elo - Vindi" className="h-8" />
            <img src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_pd_peqcartaohiper.png?504a123343cfe530f0935d7be59f2b4b" alt="Cartão Hipercard - Vindi" className="h-8" />

            <img src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqcartaohiperit.png?504a123343cfe530f0935d7be59f2b4b" alt="Cartão Hiper - Vindi" className="h-8" />
            <img src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqmercadopago.png?504a123343cfe530f0935d7be59f2b4b" alt="Cartão de Crédito - Mercado Pago" className="h-8" />
            <img src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqboletotraycheckout.png?504a123343cfe530f0935d7be59f2b4b" alt="Boleto - Vindi" className="h-8" />
            <img src="https://images.tcdn.com.br/commerce/assets/store/img/icons/formas_pagamento/pag_peqpix.png?504a123343cfe530f0935d7be59f2b4b" alt="Pix - Vindi" className="h-8" />
          </div>
          <h3 className="text-lg font-semibold mb-4">Segurança</h3>
          <img src="https://oliveiravelas.com/wp-content/uploads/2023/05/selo-site-seguro-google-1.png" alt="Selos de segurança" />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Institucional</h3>
          <ul>
            <li><a href="/sobre-nos" className="hover:text-gray-400">Sobre Nós</a></li>
            <li><a href="/politica-privacidade" className="hover:text-gray-400">Política de Privacidade</a></li>
            <li><a href="/termos-servico" className="hover:text-gray-400">Termos de Serviço</a></li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-4">Categorias</h3>
          <ul>
            <li><a href="/velas" className="hover:text-gray-400">Velas</a></li>
            <li><a href="/difusores" className="hover:text-gray-400">Difusores</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>&copy; 2024 Tiago Forward - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}
