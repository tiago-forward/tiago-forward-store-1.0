import BestSellers from "./components/BestSellers";
import NewArrivals from "./components/NewArrivals";
import ServicesBanner from "./components/ServicesBanner";

export default function Home() {
  return (
    <main className="">
      <NewArrivals />
      <ServicesBanner />
      <BestSellers />
    </main>
  );
}
