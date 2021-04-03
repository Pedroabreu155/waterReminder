import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emmiter } from "./Emmiter.js";

const App = {
  async start() {
    try {

      const time =  25 * 60 
      Timer.init(time);

      // await Notifyer.init();

      // Notifyer.notify({
      //   title: "Water Time",
      //   body: "Dê uma pausa e beba um pouco de água!",
      // });
    } catch (err) {
      console.log(err.message);
      let denied = document.getElementById("denied");
      denied.innerHTML = "Você precisa habilitar as notificações no navegador!";
    }
  },
};

export { App };
