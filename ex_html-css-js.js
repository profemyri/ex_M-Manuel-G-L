document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const direccion = document.getElementById("direccion");
    const telefono = document.getElementById("telefono");
    const tipoPescado = document.getElementById("tipo_pescado");
    const raciones = document.getElementById("raciones");
    const acompItems = document.querySelectorAll("input[name='acompanamiento']");
    const instrucciones = document.getElementById("instrucciones");
    const botonEnviar = document.getElementById("botonEnviar");
    const precioTotal = document.createElement("precioTotal");
    formulario.appendChild(precioTotal);
    
    function validacion() {
        let errores = 0;
        if (nombre.value.trim() === "") {
            errores++;
            alert("El campo nombre es erroneo o está vacío");
        }
        if (!email.value.includes("@")) {
            errores++;
            alert("El campo Email es erroneo o está vacío");
        }
        if (direccion.value.length < 18) {
            errores++;
            alert("El campo Direccion es erroneo o está vacío");
        }
        if (telefono.value.length < 9) {
            errores++;
            alert("El campo Teléfono es erroneo o está vacío");
        }

        if (errores.length > 0) {
            alert("Uno o varios campos están vacios o incorrectos");
            botonEnviar.disabled = true;
            return false;
        } else {
            botonEnviar.disabled = false;
            return true;
        }
    }
    
    function calcularPrecio() {
        const preciosDeLosPescados = { calamares: 6, adobo: 7, boquerones: 8 };
        let precioBase = preciosDeLosPescados[tipoPescado.value] || 0;
        let total = precioBase * parseInt(raciones.value || 1);
        acompItems.forEach(item => { if (item.checked) total += 4; });
        precioTotal.textContent = `El precio total del pedido es: ${total}€`;
    }
    
    function contarCaracteres() {
        const contarCaracteres = document.createElement("p");
        instrucciones.addEventListener("input", function () {
            contador.textContent = `Has escrito ${instrucciones.value.length} de 150 caracteres`;
        });
    }
    
    formulario.addEventListener("input", validarFormulario);
    tipoPescado.addEventListener("change", calcularPrecio);
    raciones.addEventListener("input", calcularPrecio);
    acompItems.forEach(item => item.addEventListener("change", calcularPrecio));
    contarCaracteres();
    
    formulario.addEventListener("submit", function (Formulario) {
        Formulario.preventDefault();
        if (validarFormulario()) {
            if (confirm("¿Segur@ de que queres enviar el formulario?")) {
                alert("Musha Grasia Quillo");
                formulario.submit();
            }
        }
    });
    
    document.getElementById("modoOscuro").addEventListener ("click", function () {
        document.body.classList.toggle("oscuro");
    });
    
    botonEnviar.addEventListener("mouseEncimaDelTexto", function () {
        this.style.backgroundColor = "white";
        this.style.color = "black";
    });

    //Maestra, no he sabido hacer el extra del modo oscuro para lo del mouse encima del botón de enviar.
    //Tampoco me ha dado tiempo a hacer el último ejercicio, el del efecto visual del boton enviar pedido, al pasarle el raton por encima.
    
});