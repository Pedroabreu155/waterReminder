const View = {
 render(){

    let container = document.getElementById('container');

    container.innerHTML = `
     <p>Se hidrate com água em:</p>
     <span>10:00</span>
     <p id="denied"></p>
     `;
 }



 
}

export { View };