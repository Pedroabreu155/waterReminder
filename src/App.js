import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const time = 0.1 * 60;
const messages = [
  "Relaxe e beba um pouco de água!",
  "Descanse um pouquinho e se hidrate!",
  "Hora de beber água e dar uma pequena pausa!",
  "Trabalhando como nunca se hidratando como sempre!",
  "Que tal beber água antes de continuar a tarefa?",
  "Dei-me um pouco da água da vida!",
  "Se você está lendo, então beba um pouquinho d'água!",
  "Faça uma pequena pausa para se hidratar!"
]

const notify = () => {

  const randomIndex = Math.floor(Math.random() * messages.length)

  const notification = Notifyer.notify({
    title: "Hora de se Hidratar",
    body: messages[randomIndex],
  });

  notification()

}

const App = {
  async start() {
    try {
      await Notifyer.init();

      Emitter.on("countdown-start", notify);

      Emitter.on("countdown-end", Timer.init);

      Timer.init(time);

    } catch (err) {

      console.log(err.message);

      let denied = document.getElementById("denied");
      denied.innerHTML = "Você precisa habilitar as notificações no navegador!";
    }

  },
};

export { App };
