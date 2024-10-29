import { Separator } from "@/components/ui/separator";

export default function ServicesBanner() {
  return (
    <section className="flex justify-center p-2 bg-black text-white">
      <ul className="max-w-7xl flex items-center justify-center gap-14 text-lg py-8">
        <li className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
          <span>Compra 100% segura</span>
        </li>
        <Separator orientation="vertical" />
        <li className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-percent"><line x1="19" x2="5" y1="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>
          <span>Ganhe 5% de desconto no PIX</span>
        </li>
        <Separator orientation="vertical" />
        <li className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smartphone-nfc"><rect width="7" height="12" x="2" y="6" rx="1" /><path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" /><path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" /><path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" /></svg>
          <span>Aceitamos cartão por aproximação</span>
        </li>
      </ul>
    </section>
  );
}
