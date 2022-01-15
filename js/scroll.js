//selecionando apénas itens que começam com - #
const menuItem =document.querySelectorAll('.menu_lateral a[href^="#"');

//Pegando todos os itens do menu
menuItem.forEach(item =>{
    item.addEventListener('click', scrollToIdOnClick);
})

//prevenindo que mude o diretório ao âncorar um item
//pegando a posição do item a ser  puxado
//passando para a smoothScrollTo
function scrollToIdOnClick(event){
    event.preventDefault();   
    const to = getScrolltopbyHref(event.target)  -30;
    scrollToPosition(to);
}

function getScrolltopbyHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;      
}

function scrollToPosition(to) {
  //código excluido por não funcionar em varios navegadores. Tive problema com safari, ie11, chrome e chrome mobile
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  //código pego na net
  //position y, x, tempo em ms
  smoothScrollTo(0, to, 1000);
}




/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
*/
 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };



