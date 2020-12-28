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
let t35 = document.querySelector("#t35");
let t36 = document.querySelector("#t36");
let t37 = document.querySelector("#t37");
let t38 = document.querySelector("#t38");
let t39 = document.querySelector("#t39");
let t41 = document.querySelector("#t41");
let t42 = document.querySelector("#t42");
let t43 = document.querySelector("#t43");
let t44 = document.querySelector("#t44");
let t51 = document.querySelector("#t51");
let t52 = document.querySelector("#t52");
let t53 = document.querySelector("#t53");
let t54 = document.querySelector("#t54");
let t55 = document.querySelector("#t55");
let t56 = document.querySelector("#t56");
let t61 = document.querySelector("#t61");
let t62 = document.querySelector("#t62");
let t63 = document.querySelector("#t63");
let t64 = document.querySelector("#t64");
let t65 = document.querySelector("#t65");
let t66 = document.querySelector("#t66");
let t67 = document.querySelector("#t67");

let container = document.querySelector("#dress-box");
let container2 = document.querySelector("#dress-box2");
let container3 = document.querySelector("#dress-box3");
let container4 = document.querySelector("#dress-box4");
let container5 = document.querySelector("#dress-box5");
let container6 = document.querySelector("#dress-box6");
let container7 = document.querySelector("#dress-box7");
let container8 = document.querySelector("#dress-box8");
let container9 = document.querySelector("#dress-box9");
let container10 = document.querySelector("#dress-box10");


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
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");
let box10 = document.getElementById("box10");

let intro= document.getElementById("intro");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five= document.getElementById("five");
let six= document.getElementById("six");
let seven= document.getElementById("seven");
let eight= document.getElementById("eight");
let nine= document.getElementById("nine");
let ten= document.getElementById("ten");


let elms = [box1, box2, box3, box4, box5, box6,box7,box8,box9,box10, intro];
let dresses1= [t1, t2, t3, t4, t5];
let dresses2 = [t7, t8, t9, t10];
let dresses3 = [t12, t13, t14, t15];
let dresses4 = [t22, t23,t24];
let dresses5= [t18, t17, t19, t20];
let dresses6= [t31, t32, t33];
let dresses7 =[t35,t36,t37,t38,t39];
let dresses8 =[t41,t42,t43,t44];
let dresses9 =[t51,t52,t53,t54,t55,t56];
let dresses10 =[t61,t62,t63,t64,t65,t66,t67];

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
let bt35 = document.getElementById("b-t35");
let bt36 = document.getElementById("b-t36");
let bt37 = document.getElementById("b-t37");
let bt38 = document.getElementById("b-t38");
let bt39 = document.getElementById("b-t39");
let bt41 = document.getElementById("b-t41");
let bt42 = document.getElementById("b-t42");
let bt43 = document.getElementById("b-t43");
let bt44 = document.getElementById("b-t44");
let bt51 = document.getElementById("b-t51");
let bt52 = document.getElementById("b-t52");
let bt53 = document.getElementById("b-t53");
let bt54 = document.getElementById("b-t54");
let bt55 = document.getElementById("b-t55");
let bt56 = document.getElementById("b-t56");
let bt61 = document.getElementById("b-t61");
let bt62 = document.getElementById("b-t62");
let bt63 = document.getElementById("b-t63");
let bt64 = document.getElementById("b-t64");
let bt65 = document.getElementById("b-t65");
let bt66 = document.getElementById("b-t66");
let bt67 = document.getElementById("b-t67");

let allDresses = [t1,t2,t3,t4,t7,t8,t9, t13, t13, t14, t15, t22, t23, t24, t18, t17, t19, t20, t31, t32, t33, t35,t36,t37,t38,t41,t42,t43,t44,t51,t52,t53,t54,t61,t62,t63,t64,t65,t66,t67];

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
seven.addEventListener("click", function() { viewDresses(box7, dresses7, container7); }) ;
eight.addEventListener("click", function() { viewDresses(box8, dresses8, container8); }) ;
nine.addEventListener("click", function() { viewDresses(box9, dresses9, container9); }) ;
ten.addEventListener("click", function() { viewDresses(box10, dresses10, container10); }) ;

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
bt35.addEventListener("click", function() { selectDress(t35, dresses7); }) ;
bt36.addEventListener("click", function() { selectDress(t36, dresses7); }) ;
bt37.addEventListener("click", function() { selectDress(t37, dresses7); }) ;
bt38.addEventListener("click", function() { selectDress(t38, dresses7); }) ;
bt39.addEventListener("click", function() { selectHat(t39); }) ;
bt41.addEventListener("click", function() { selectDress(t41, dresses8); }) ;
bt42.addEventListener("click", function() { selectDress(t42, dresses8); }) ;
bt43.addEventListener("click", function() { selectDress(t43, dresses8); }) ;
bt44.addEventListener("click", function() { selectDress(t44, dresses8); }) ;
bt51.addEventListener("click", function() { selectDress(t51, dresses9); }) ;
bt52.addEventListener("click", function() { selectDress(t52, dresses9); }) ;
bt53.addEventListener("click", function() { selectDress(t53, dresses9); }) ;
bt54.addEventListener("click", function() { selectDress(t54, dresses9); }) ;
bt55.addEventListener("click", function() { selectHat(t55); }) ;
bt56.addEventListener("click", function() { selectHat(t56); }) ;
bt61.addEventListener("click", function() { selectDress(t61, dresses10); }) ;
bt62.addEventListener("click", function() { selectDress(t62, dresses10); }) ;
bt63.addEventListener("click", function() { selectDress(t63, dresses10); }) ;
bt64.addEventListener("click", function() { selectDress(t64, dresses10); }) ;
bt65.addEventListener("click", function() { selectDress(t65, dresses10); }) ;
bt66.addEventListener("click", function() { selectDress(t66, dresses10); }) ;
bt67.addEventListener("click", function() { selectDress(t67, dresses10); }) ;
