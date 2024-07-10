import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isGuestsInputOpen, setGuestsInputOpen] = useState(false);

  function openGuestsInput() {
    setGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setGuestsInputOpen(false);
  }

  return (
    <div className="h-screen flex justify-center items-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 w-48 outline-none"
              />
            </div>
            <div className="w-px h-6 bg-zinc-800"></div>
            {isGuestsInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="bg-zinc-800 text-zinc-50 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2 />
              </button>
            ) : (
              <button
                onClick={openGuestsInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Continuar
                <ArrowRight />
              </button>
            )}
          </div>
          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded flex items-center shadow-shape gap-3">
              <div className="flex items-center gap-2 w-full">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Quem estará na viagem?"
                  className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
                />
              </div>
              <button
                onClick={openGuestsInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 w-72"
              >
                Confirmar viagem
                <ArrowRight />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pelo plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
