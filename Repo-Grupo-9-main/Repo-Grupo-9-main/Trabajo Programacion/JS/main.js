const form = document.getElementById("form-contacto");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputDescripcion = document.getElementById("descripcion");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const descripcion = inputDescripcion.value.trim();

    mensaje.classList.remove("d-none", "alert-success", "alert-danger");

    if (nombre === "" || email === "" || descripcion === "") {
        mensaje.textContent = "Completá todos los campos para continuar.";
        mensaje.classList.add("alert-danger");
    } else if (email.includes("@") && email.length > 3) {
        mensaje.textContent = "¡Reporte enviado con éxito!";
        mensaje.classList.add("alert-success");
        form.reset();
    } else {
        mensaje.textContent = "El email no es válido.";
        mensaje.classList.add("alert-danger");
    }
});
const secciones = document.querySelectorAll('section[id]');
const linksNav = document.querySelectorAll('.nav-epoca');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        linksNav.forEach((link) => {
          link.classList.toggle('activa', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.35 }
);

secciones.forEach((sec) => observer.observe(sec));