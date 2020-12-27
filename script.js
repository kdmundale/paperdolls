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
let t18 = document.querySelector("#t18");
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
let dresses1= [t1, t2, t3, t4, t5];
let dresses2 = [t7, t8, t9, t10];
let dresses3 = [t12, t13, t14, t15];
let dresses4 = [t22, t23,t24];
let dresses5= [t18, t17, t19, t20];
let dresses6= [t31, t32, t33];


function viewDresses(box, dress_list, cont) {
  for (i=0; i < elms.length; i++){
    if (elms[i] == box){
      show_elm(box);
    } else {
      hide_elm(elms[i]);
    }
  };
  for (i=0; i < dress_list.length; i++){
    moveDress(dress_list[i], cont);
  }
};

let bt1 = document.getElementById("b-t1");
let bt2 = document.getElementById("b-t2");
let bt3 = document.getElementById("b-t3");
let bt4 = document.getElementById("b-t4");
let bt5 = document.getElementById("b-t5");
let bt7 = document.getElementById("b-t7");
let bt8 = document.getElementById("b-t8");
let bt9 = document.getElementById("b-t9");
let bt10 = document.getElementById("b-t10");
let bt12 = document.getElementById("b-t12");
let bt13 = document.getElementById("b-t13");
let bt14 = document.getElementById("b-t14");
let bt15 = document.getElementById("b-t15");
let bt18 = document.getElementById("b-t18");
let bt19 = document.getElementById("b-t19");
let bt17 = document.getElementById("b-t17");
let bt20 = document.getElementById("b-t20");
let bt22 = document.getElementById("b-t22");
let bt23 = document.getElementById("b-t23");
let bt24 = document.getElementById("b-t24");
let bt31 = document.getElementById("b-t31");
let bt32 = document.getElementById("b-t32");
let bt33 = document.getElementById("b-t33");

let allDresses = [t1,t2,t3,t4,t7,t8,t9, t13, t13, t14, t15, t22, t23, t24, t18, t17, t19, t20, t31, t32, t33];

function selectDress(dress, dress_list){
  for (i=0; i < dress_list.length; i++){
    if (dress_list[i] == dress){
      show_elm(dress);
    } else {
      hide_elm(dress_list[i]);
    }
  }
};

function selectHat(hat) {
  if (hat.style.display =="block"){
    hide_elm(hat);
  } else {
    show_elm(hat);
  }
};


one.addEventListener("click", function() { viewDresses(box1, dresses1, container); }) ;
two.addEventListener("click", function() { viewDresses(box2, dresses2, container2); }) ;
three.addEventListener("click", function() { viewDresses(box3, dresses3, container3); }) ;
four.addEventListener("click", function() { viewDresses(box4, dresses4, container4); }) ;
five.addEventListener("click", function() { viewDresses(box5, dresses5, container5); }) ;
six.addEventListener("click", function() { viewDresses(box6, dresses6, container6); }) ;
bt1.addEventListener("click", function() { selectDress(t1, dresses1); }) ;
bt2.addEventListener("click", function() { selectDress(t2, dresses1); }) ;
bt3.addEventListener("click", function() { selectDress(t3, dresses1); }) ;
bt4.addEventListener("click", function() { selectDress(t4, dresses1); }) ;
bt5.addEventListener("click", function() { selectHat(t5); });
bt10.addEventListener("click", function() { selectHat(t10); });
bt7.addEventListener("click", function() { selectDress(t7, dresses2); }) ;
bt8.addEventListener("click", function() { selectDress(t8, dresses2); }) ;
bt9.addEventListener("click", function() { selectDress(t9, dresses2); }) ;
bt12.addEventListener("click", function() { selectDress(t12, dresses3); }) ;
bt13.addEventListener("click", function() { selectDress(t13, dresses3); }) ;
bt14.addEventListener("click", function() { selectDress(t14, dresses3); }) ;
bt15.addEventListener("click", function() { selectDress(t15, dresses3); }) ;
bt18.addEventListener("click", function() { selectDress(t18, dresses5); }) ;
bt17.addEventListener("click", function() { selectDress(t17, dresses5); }) ;
bt19.addEventListener("click", function() { selectDress(t19, dresses5); }) ;
bt20.addEventListener("click", function() { selectDress(t20, dresses5); }) ;
bt22.addEventListener("click", function() { selectDress(t22, dresses4); }) ;
bt23.addEventListener("click", function() { selectDress(t23, dresses4); }) ;
bt24.addEventListener("click", function() { selectDress(t24, dresses4); }) ;
bt31.addEventListener("click", function() { selectDress(t31, dresses6); }) ;
bt32.addEventListener("click", function() { selectDress(t32, dresses6); }) ;
bt33.addEventListener("click", function() { selectDress(t33, dresses6); }) ;
