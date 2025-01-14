// console.log('Ok')

// import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger)


// // Seleccionamos los elementos de la sección
// function aboutSection(el) {
//     const tl = gsap.timeline({ paused: true });
  
//     // Selección de los elementos h2 y p dentro de la sección
//     const title = el.querySelector('h2');
//     const text = el.querySelector('p');
  
//     // Animación del título (h2)
//     tl.from(title, {
//       duration: 0.6,
//       y: 50,
//       opacity: 0,
//       ease: 'power3.out'
//     });
  
//     // Animación del texto (p), con un retraso para que ocurra después del título
//     tl.from(text, {
//       duration: 0.6,
//       y: 50,
//       opacity: 0,
//       ease: 'power3.out',
//       delay: 0.3
//     });
  
//     return {
//         el: el,
//         tl: tl,
//         top: el.offsetTop,  // Asignamos la posición superior de la sección
//         bottom: el.offsetTop + el.offsetHeight,  // Calculamos el borde inferior de la sección
//         start: 0,
//         end: 0,
//         ended: false,
//         // Determinamos la posición cuando se debe activar la animación
//         get updateS() {
//           return this.top - window.innerHeight / 1.5;
//         },
//         get updateE() {
//           return this.bottom;
//         }
//       };
//   }
  
//   // Aquí se gestionan las secciones en el sitio
//   function getSections(el) {
//     const section = el.dataset.section || el.dataset.element;
  
//     switch (section) {
//       case 'about':
//         const about = aboutSection(el);
//         sections.push(about);
//         break;
//       // Otros casos para otras secciones...
//     }
//   }
  

//   // Para manejar la visibilidad de las animaciones y dispararlas con el scroll
//   function playTimelines() {
//     console.log('Scrolling...'); // Agrega este log para verificar que se ejecuta
//     sections.forEach(s => {
//       const visible = s.updateS < window.scrollY && s.updateE > window.scrollY;
//       if (visible && !s.ended) {
//         s.tl.play();
//         s.el.classList.add('in-view');
//         s.ended = true;
//       }
//     });
//   }
  
//   // Aquí almacenamos las secciones que necesitamos manejar
//   const sections = [];
//   document.querySelectorAll('[data-section]').forEach(section => {
//     getSections(section);
//   });
  
//   // Activamos la función de scroll
//   window.addEventListener('scroll', playTimelines);