import data from "./../datos/fotos";
const galeria = document.getElementById("galeria");

const cargarImagen = (id, nombre, ruta, descripcion) => {
  galeria.querySelector(".galeria__imagen").src = ruta;
  galeria.querySelector(".galeria__imagen").dataset.idImagen = id;
  galeria.querySelector(".galeria__titulo").innerText = nombre;
  galeria.querySelector(".galeria__descripcion-imagen-activa").innerText =
    descripcion;
  // galeria.querySelector(".galeria__imagen").src = ruta;

  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];
  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index;
    }
  });

  //Marcamos la imagen del carousel como activa.
  if (galeria.querySelectorAll(".galeria__carousel-slide").length > 0) {
    galeria
      .querySelector(".galeria__carousel-slide--active")
      .classList.remove("galeria__carousel-slide--active");

    galeria
      .querySelectorAll(".galeria__carousel-slide")
      [indexImagenActual].classList.add("galeria__carousel-slide--active");
  }
};

const cargarAnteriorSiguiente = (direccion) => {
  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];
  const idImagenActual = parseInt(
    galeria.querySelector(".galeria__imagen").dataset.idImagen
  );
  let indexImagenActual, nuevoIndex;
  fotos.forEach((foto, index) => {
    if (foto.id === idImagenActual) {
      indexImagenActual = index;
    }
  });

  if (direccion === "siguiente") {
    nuevoIndex = (indexImagenActual + 1) % fotos.length;
  } else if (direccion === "anterior") {
    nuevoIndex = (indexImagenActual - 1 + fotos.length) % fotos.length;
  }

  const { id, nombre, ruta, descripcion } = fotos[nuevoIndex];
  cargarImagen(id, nombre, ruta, descripcion);
};

export { cargarImagen, cargarAnteriorSiguiente };
