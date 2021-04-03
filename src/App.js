import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const notify = Notifyer.notify({
  title: "Hora de se Hidratar",
  body: "Relaxe e beba um pouco de água!",
});
const time = 25 * 60;

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
