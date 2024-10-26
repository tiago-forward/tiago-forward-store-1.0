import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="flex flex-col items-center border-b-2">
      <div className="max-w-7xl flex items-center gap-4 py-4">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">Tiago Forward</span>
          <span>Criações aromáticas</span>
        </div>
        <div>
          <form action="" className="flex border-2 rounded-md">
            <input type="search" id="seacth" placeholder="Buscar produtos" className="outline-none rounded-tl-md rounded-bl-md pl-2" />
            <button type="submit" className="bg-white outline-none p-2 rounded-tr-md rounded-br-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </button>
          </form>
        </div>
        <div className="flex items-center gap-4 leading-3">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>
            <div className="flex flex-col">
              <span className="text-sm">Atendimento</span>
              <strong className="text-md">Fale comigo</strong>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>
            <div className="flex flex-col">
              <span className="text-sm">Perfil</span>
              <strong className="text-md">Meus favoritos</strong>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
            <div className="flex flex-col">
              <span className="text-sm">Carrinho</span>
              <strong className="text-md">0,00 R$</strong>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex items-center w-full border-t-2">
        <ul className="w-full flex items-center justify-center gap-14 py-4">
          <a href="/">Home</a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <a href="#" className="flex items-center">
                Categorias
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
              </a>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-3">
              <DropdownMenuItem asChild>
                <a href="/velas">Velas</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="/promocoes">Promoções</a>
          <a href="/lancamentos">Lançamentos</a>
        </ul>
      </nav>
    </header>
  );
}
