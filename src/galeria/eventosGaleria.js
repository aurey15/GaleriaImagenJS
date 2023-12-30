import { cargarAnteriorSiguiente } from "./cargarImagen";
import carousel from "./carousel";
import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";

const galeria = document.getElementById("galeria");
galeria.addEventListener("click", (e) => {
  const boton = e.target.closest("button");
  //Cerrar Galeria
  if (boton?.dataset?.accion === "cerrar-galeria") {
    cerrarGaleria();
  }

  //Slide click en el carousel
  if (e.target.dataset.id) {
    slideClick(e);
  }

  //Siguiente Img
  if (boton?.dataset?.accion === "siguiente-imagen") {
    cargarAnteriorSiguiente("siguiente");
  }

  //Anterior Img
  if (boton?.dataset?.accion === "anterior-imagen") {
    cargarAnteriorSiguiente("anterior");
  }

  //Carousel Siguiente
  if (boton?.dataset?.accion === "siguiente-slide") {
    carousel("siguiente");
  }

  //Carousel Atras
  if (boton?.dataset?.accion === "anterior-slide") {
    carousel("anterior");
  }

});
