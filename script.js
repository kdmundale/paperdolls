let t1 = document.querySelector("#t1");
let t2 = document.querySelector("#t2");
let t3 = document.querySelector("#t3");
let t4 = document.querySelector("#t4");
let t5 = document.querySelector("#t5");
let t7 = document.querySelector("#t7");
let t8 = document.querySelector("#t8");
let t9 = document.querySelector("#t9");
let t10 = document.querySelector("#t10");
let t12 = document.querySelector("#t12");
let t13 = document.querySelector("#t13");
let t14 = document.querySelector("#t14");
let t15 = document.querySelector("#t15");
let container = document.querySelector("#dress-box");
let container2 = document.querySelector("#dress-box2");
let container3 = document.querySelector("#dress-box3");



function moveDress(dragItem, container) {

  let active = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  container.addEventListener("touchstart", dragStart, false);
  container.addEventListener("touchend", dragEnd, false);
  container.addEventListener("touchmove", drag, false);

  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);

  function dragStart(e) {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(e) {
    if (active) {

      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
}

moveDress(t1, container);
moveDress(t2, container);
moveDress(t3, container);
moveDress(t4, container);
moveDress(t5, container);
moveDress(t7, container2);
moveDress(t8, container2);
moveDress(t9, container2);
moveDress(t10, container2);
moveDress(t12, container3);
moveDress(t13, container3);
moveDress(t14, container3);
moveDress(t15, container3);
