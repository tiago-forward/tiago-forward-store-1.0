export default function NotificationBanner() {
  return (
    <div className="flex justify-between items-center text-sm p-2 bg-black text-white">
      <div></div>
      <div className="">FRETE GRÁTIS PARA AQUELES QUE RESIDAM NA CIDADE DE CAMPINA GRANDE</div>
      <div>
        <a href="https://www.instagram.com/tiagoforward_store/" target="_blank" title="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
        </a>
      </div>
    </div>
  );
}
