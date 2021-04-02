const View = {
 render({ minutes, seconds }){

    let container = document.getElementById('container');

    container.innerHTML = `
     <p>Se hidrate com água em:</p>
     <span>${minutes}:${seconds}</span>
     <p id="denied"></p>
     `;
 }




}

export { View };