// Scroll suave entre secciones
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Filtro de libros
function filtrarLibros() {
  const input = document.getElementById("buscador").value.toLowerCase();
  const libros = document.getElementsByClassName("libro");

  for (let i = 0; i < libros.length; i++) {
    const texto = libros[i].innerText.toLowerCase();
    libros[i].style.display = texto.includes(input) ? "block" : "none";
  }
}

// Calendario simple (muestra fecha actual)
const fecha = new Date();
document.getElementById("fecha").textContent =
  `Hoy es ${fecha.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}`;

// Envío de formulario
function enviarFormulario(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  document.getElementById("estado").textContent = `Gracias, ${nombre}. Tu mensaje fue enviado correctamente.`;
  document.getElementById("formContacto").reset();
}
// ---------------------------
// Mostrar libros por facultad
// ---------------------------
function mostrarLibros(facultad) {
  const lista = document.getElementById("listaLibros");
  let contenido = "";

  if (facultad === "ingenieria") {
    contenido = `
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Introducción a la Ingeniería</h3>
        <p>Autor: Holtzapple & Reece</p>
        <a href="#">Descargar PDF</a>
      </div>
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Fundamentos de Mecatrónica</h3>
        <p>Autor: Bolton</p>
        <a href="#">Descargar PDF</a>
      </div>
    `;
  } 
  else if (facultad === "sociales") {
    contenido = `
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Sociología Contemporánea</h3>
        <p>Autor: Giddens</p>
        <a href="#">Descargar PDF</a>
      </div>
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Psicología Social</h3>
        <p>Autor: Myers</p>
        <a href="#">Descargar PDF</a>
      </div>
    `;
  } 
  else if (facultad === "salud") {
    contenido = `
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Anatomía Humana</h3>
        <p>Autor: Gray</p>
        <a href="#">Descargar PDF</a>
      </div>
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Principios de Enfermería</h3>
        <p>Autor: Potter & Perry</p>
        <a href="#">Descargar PDF</a>
      </div>
    `;
  } 
  else if (facultad === "educacion") {
    contenido = `
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Teorías del Aprendizaje</h3>
        <p>Autor: Ausubel</p>
        <a href="#">Descargar PDF</a>
      </div>
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Didáctica General</h3>
        <p>Autor: Zabala</p>
        <a href="#">Descargar PDF</a>
      </div>
    `;
  } 
  else if (facultad === "administracion") {
    contenido = `
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Administración Moderna</h3>
        <p>Autor: Koontz</p>
        <a href="#">Descargar PDF</a>
      </div>
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Gestión Estratégica</h3>
        <p>Autor: Porter</p>
        <a href="#">Descargar PDF</a>
      </div>
    `;
  } 
  else if (facultad === "derecho") {
    contenido = `
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Introducción al Derecho</h3>
        <p>Autor: García Máynez</p>
        <a href="#">Descargar PDF</a>
      </div>
      <div class="libro">
        <img src="https://via.placeholder.com/100x150" alt="Portada libro">
        <h3>Derecho Constitucional</h3>
        <p>Autor: Bidart Campos</p>
        <a href="#">Descargar PDF</a>
      </div>
    `;
  }

  lista.innerHTML = contenido;
  scrollToSection("recursos");
}
/* ================================
   Fondo animado: figuras geométricas suaves
   (Círculo, cuadrado, triángulo y líneas lentas)
   ================================ */
(function () {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, DPR;
const colors = [
  'rgba(255, 255, 255, 0.3)',
  'rgba(200, 200, 255, 0.3)',
  'rgba(180, 255, 200, 0.3)',
  'rgba(255, 220, 200, 0.3)'
];

  const figuras = [
    { tipo: "circulo", x: 200, y: 300, dx: 0.1, dy: 0.05, size: 60, color: COLORS[0] },
    { tipo: "cuadrado", x: 600, y: 400, dx: -0.07, dy: 0.08, size: 80, color: COLORS[1] },
    { tipo: "triangulo", x: 900, y: 250, dx: 0.05, dy: -0.06, size: 100, color: COLORS[2] },
    { tipo: "linea", x: 100, y: 500, dx: 0.02, dy: 0.04, length: 200, color: COLORS[3] },
    { tipo: "linea", x: 700, y: 100, dx: -0.03, dy: 0.02, length: 250, color: COLORS[0] }
  ];

  function onResize() {
    DPR = window.devicePixelRatio || 1;
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function drawFigura(f) {
    ctx.save();
    ctx.strokeStyle = f.color;
    ctx.fillStyle = f.color;
    ctx.lineWidth = 2;

    if (f.tipo === "circulo") {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
      ctx.fill();
    } else if (f.tipo === "cuadrado") {
      ctx.fillRect(f.x, f.y, f.size, f.size);
    } else if (f.tipo === "triangulo") {
      ctx.beginPath();
      ctx.moveTo(f.x, f.y - f.size);
      ctx.lineTo(f.x - f.size, f.y + f.size);
      ctx.lineTo(f.x + f.size, f.y + f.size);
      ctx.closePath();
      ctx.fill();
    } else if (f.tipo === "linea") {
      ctx.beginPath();
      ctx.moveTo(f.x, f.y);
      ctx.lineTo(f.x + f.length, f.y);
      ctx.stroke();
    }

    ctx.restore();
  }

  function animar() {
    // Fondo degradado pastel
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, "#fce4ec");
    grad.addColorStop(1, "#e0f7fa");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Dibujar figuras
    figuras.forEach(f => {
      drawFigura(f);
      f.x += f.dx;
      f.y += f.dy;

      // Rebote suave
      if (f.x < -100 || f.x > W + 100) f.dx *= -1;
      if (f.y < -100 || f.y > H + 100) f.dy *= -1;
    });

    requestAnimationFrame(animar);
  }

  window.addEventListener('resize', onResize);
  onResize();
  animar();
})();
