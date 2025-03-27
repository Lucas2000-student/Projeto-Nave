import Comunicador from "@/components/Comunicador";
import Energia from "@/components/Energia";
import TempoEstelar from "@/components/TempoEstelar";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center gap-6 flex-wrap w-full min-h-screen">
        <Energia/>
        <Comunicador/>
        <TempoEstelar/>
      </div>
    </main>
  );
}
