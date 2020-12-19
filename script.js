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
let t16a = document.querySelector("#t16a");
let t17 = document.querySelector("#t17");
let t19 = document.querySelector("#t19");
let t20 = document.querySelector("#t20");
let t22 = document.querySelector("#t22");
let t23 = document.querySelector("#t23");
let t24 = document.querySelector("#t24");
let container = document.querySelector("#dress-box");
let container2 = document.querySelector("#dress-box2");
let container3 = document.querySelector("#dress-box3");
let container4 = document.querySelector("#dress-box4");
let container5 = document.querySelector("#dress-box5");

function moveDress(dragItem, container) {

  let active = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  if(typeof(container) != 'undefined' && container != null){
    container.addEventListener("touchstart", dragStart, {passive: false});
    container.addEventListener("touchend", dragEnd, {passive: false});
    container.addEventListener("touchmove", drag, {passive: false});

    container.addEventListener("mousedown", dragStart, {passive: false});
    container.addEventListener("mouseup", dragEnd, {passive: false});
    container.addEventListener("mousemove", drag, {passive: false});
  }

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
};

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
moveDress(t22, container4);
moveDress(t23, container4);
moveDress(t24, container4);
moveDress(t16a, container5);
moveDress(t17, container5);
moveDress(t19, container5);
moveDress(t20, container5);



function hide_elm (elm) {
  console.log("hide this",elm);
  if(typeof(elm) != 'undefined' && elm != null){
    if (elm.style.display == "block"){
      elm.style.display = "none";
    } else {
      elm.style.display = "none";
    }
  }
};

function show_elm (elm) {
  console.log("show this", elm);
  if(typeof(elm) != 'undefined' && elm != null){
    if (elm.style.display == "none"){
      console.log("show", elm)
      elm.style.display = "block";
    } else {
      elm.style.display = "block";
    }
  }
};
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");


let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five= document.getElementById("five");

let elms = [box1, box2, box3, box4, box5];

function viewDresses1() {

  for (i=0; i < elms.length; i++){
    if (elms[i] == box1){
      show_elm(box1);
    } else {
      hide_elm(elms[i]);
    }
  };
};
function viewDresses2() {

  for (i=0; i < elms.length; i++){
    if (elms[i] == box2){
      show_elm(box2);
    } else {
      hide_elm(elms[i]);
    }
  };
};
function viewDresses3() {

  for (i=0; i < elms.length; i++){
    if (elms[i] == box3){
      show_elm(box3);
    } else {
      hide_elm(elms[i]);
    }
  };
};
function viewDresses4() {

  for (i=0; i < elms.length; i++){
    if (elms[i] == box4){
      show_elm(box4);
    } else {
      hide_elm(elms[i]);
    }
  };
};
function viewDresses5() {

  for (i=0; i < elms.length; i++){
    if (elms[i] == box5){
      show_elm(box5);
    } else {
      hide_elm(elms[i]);
    }
  };
};

one.addEventListener("click", viewDresses1);
two.addEventListener("click", viewDresses2);
three.addEventListener("click", viewDresses3);
four.addEventListener("click", viewDresses4);
five.addEventListener("click", viewDresses5);
