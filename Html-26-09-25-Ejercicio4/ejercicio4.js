function miNombre() {
    let miNombre = document.getElementById("texto");
    
    let primerNombre = document.createElement("span");
    let apellido = document.createElement("i");

    primerNombre.innerHTML = "Saray ";
    apellido.innerHTML = "Munera";

    miNombre.appendChild(primerNombre);
    miNombre.appendChild(apellido);
}