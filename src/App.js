import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";

const App = {
  async start() {
    try {
      Timer.init();

      await Notifyer.init();

      Notifyer.notify({
        title: "Water Time",
        body: "Dê uma pausa e beba um pouco de água!",
      });
    } catch (err) {
      console.log(err.message);
      let denied = document.getElementById("denied");
      denied.innerHTML = "Você precisa habilitar as notificações no navegador!";
    }
  },
};

export { App };
