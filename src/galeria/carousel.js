const galeria = document.getElementById("galeria");
const carousel = (direccion) => {
  const opciones = {
    root: document.querySelector(".galeria__carousel"),
    rootMargin: "0px",
    threshold: 0.9
    //con el threshold le decimos cuanto necesita estar la img visible para que se considere que esta completa y la observe
  };

  const observer = new IntersectionObserver((entradas) => {
    //entradas tiene la informacion de lo que estamos observando
    const slidesVisibles = entradas.filter((entrada) => {
      if (entrada.isIntersecting === true) {
        return entrada;
      }
    });

    if(direccion === "siguiente"){
    //Obtenemos el ultimo slide visible
        const ultimaSlideVisible = slidesVisibles[slidesVisibles.length - 1]
      const indexUltimoSlideVisible = entradas.indexOf(ultimaSlideVisible);
     
     if(entradas.length - 1 > indexUltimoSlideVisible){
       //target.scrollIntoView este metodo nos permite hacer un scroll y ponerlo en la vista
       entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
         behavior: "smooth",
         inline: "start"
       });

     }

    }else if(direccion === "anterior"){
      const primerSlideVisible = slidesVisibles[0];
      const indexPrimerSLideVisible = entradas.
      indexOf(primerSlideVisible);
      if(indexPrimerSLideVisible >= 1){
        entradas[indexPrimerSLideVisible - 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start"
        });
      }
    }

    const slides = galeria.querySelectorAll(".galeria__carousel-slide");
    slides.forEach((slide) => {
      observer.unobserve(slide);0
    });
  }, opciones);

  const slides = galeria.querySelectorAll(".galeria__carousel-slide");
  slides.forEach((slide) => {
    observer.observe(slide);
  });
};

export default carousel;
