import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const App = {
  async start() {
    try {
      await Notifyer.init();

      Emitter.on('countdown-start', () => {

        Notifyer.notify({
          title: "Water Time",
          body: "Dê uma pausa e beba um pouco de água!",
        });

      })

      const time =  25 * 60 
      Timer.init(time);

      

      
    } catch (err) {
      console.log(err.message);
      let denied = document.getElementById("denied");
      denied.innerHTML = "Você precisa habilitar as notificações no navegador!";
    }
  },
};

export { App };
