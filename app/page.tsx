import Image from "next/image";
import BarberCards from "./components/barberCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BarberCards />
    </main>
  );
}
