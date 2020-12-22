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
let t31 = document.querySelector("#t31");
let t32 = document.querySelector("#t32");
let t33 = document.querySelector("#t33");

let container = document.querySelector("#dress-box");
let container2 = document.querySelector("#dress-box2");
let container3 = document.querySelector("#dress-box3");
let container4 = document.querySelector("#dress-box4");
let container5 = document.querySelector("#dress-box5");
let container6 = document.querySelector("#dress-box6");


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

function hide_elm (elm) {
  if(typeof(elm) != 'undefined' && elm != null){
    if (elm.style.display == "block"){
      elm.style.display = "none";
    } else {
      elm.style.display = "none";
    }
  }
};

function show_elm (elm) {
  if(typeof(elm) != 'undefined' && elm != null){
    if (elm.style.display == "none"){
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
let box6 = document.getElementById("box6");

let intro= document.getElementById("intro");


let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five= document.getElementById("five");
let six= document.getElementById("six");

let elms = [box1, box2, box3, box4, box5, box6, intro];

function viewDresses1() {
  let dresses= [t1, t2, t3, t4, t5];
  for (i=0; i < elms.length; i++){
    if (elms[i] == box1){
      show_elm(box1);
    } else {
      hide_elm(elms[i]);
    }
  };
  for (i=0; i < dresses.length; i++){
    moveDress(dresses[i], container);
  }
};

function viewDresses2() {
  let dresses = [t7, t8, t9, t10];
  for (i=0; i < elms.length; i++){
    if (elms[i] == box2){
      show_elm(box2);
    } else {
      hide_elm(elms[i]);
    }
  };
  for (i=0; i < dresses.length; i++){
    moveDress(dresses[i], container2);
  }
};
function viewDresses3() {
  let dresses = [t12, t13, t14, t15];
  for (i=0; i < elms.length; i++){
    if (elms[i] == box3){
      show_elm(box3);
    } else {
      hide_elm(elms[i]);
    }
  };
  for (i=0; i < dresses.length; i++){
    moveDress(dresses[i], container3);
  }
};
function viewDresses4() {
  let dresses = [t22, t23,t24];
  for (i=0; i < elms.length; i++){
    if (elms[i] == box4){
      show_elm(box4);
    } else {
      hide_elm(elms[i]);
    }
  };
  for (i=0; i < dresses.length; i++){
    moveDress(dresses[i], container4);
  }
};

function viewDresses5() {
  let dresses= [t16a, t17, t19, t20];
  for (i=0; i < elms.length; i++){
    if (elms[i] == box5){
      show_elm(box5);
    } else {
      hide_elm(elms[i]);
    }
  };
  for (i=0; i < dresses.length; i++){
    moveDress(dresses[i], container5);
  }
};

function viewDresses6() {
  let dresses= [t31, t32, t33];
  for (i=0; i < elms.length; i++){
    if (elms[i] == box6){
      show_elm(box6);
    } else {
      hide_elm(elms[i]);
    }
  };
  for (i=0; i < dresses.length; i++){
    moveDress(dresses[i], container6);
  }
};

one.addEventListener("click", viewDresses1);
two.addEventListener("click", viewDresses2);
three.addEventListener("click", viewDresses3);
four.addEventListener("click", viewDresses4);
five.addEventListener("click", viewDresses5);
six.addEventListener("click", viewDresses6);
