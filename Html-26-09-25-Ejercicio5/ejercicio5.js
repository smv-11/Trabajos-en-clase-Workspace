function miNombre() {
    
    let nombres = ["Saray", "Alexis", "Ana", "Sara", "Valen", "Manuela", "Maria"];

    
    let lista = document.getElementById("lista-nombres");

    lista.innerHTML = "";

    for (let i = 0; i < nombres.length; i++) {
        let item = document.createElement("li");
        item.textContent = nombres[i];
        lista.appendChild(item);
    }
}
