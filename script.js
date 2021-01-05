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
let t25 = document.querySelector("#t25");

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
let t71 = document.querySelector("#t71");
let t72 = document.querySelector("#t72");
let t73 = document.querySelector("#t73");
let t74 = document.querySelector("#t74");
let t81 = document.querySelector("#t81");
let t82 = document.querySelector("#t82");
let t83 = document.querySelector("#t83");
let t84 = document.querySelector("#t84");

let t = document.getElementById("t");
let t6 =document.getElementById("t6");
let t11 =document.getElementById("t11");
let t21 =document.getElementById("t21");
let t16 =document.getElementById("t16");
let t30 = document.getElementById("t30");
let t34 = document.getElementById("t34");
let t40 = document.getElementById("t40");
let t50 = document.getElementById("t50");
let t60 = document.getElementById("t60");
let t70 = document.getElementById("t70");
let t80 = document.getElementById("t80");

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
let container11 = document.querySelector("#dress-box11");
let container12 = document.querySelector("#dress-box12");
let body= document.querySelector("body");

let t_org = document.getElementById("t_org");
let t6_org = document.getElementById("t6_org");
let t11_org = document.getElementById("t11_org");
let t16_org = document.getElementById("t16_org");
let t30_org = document.getElementById("t30_org");
let t21_org = document.getElementById("t21_org");
let t34_org = document.getElementById("t34_org");
let t40_org = document.getElementById("t40_org");
let t50_org = document.getElementById("t50_org");
let t60_org = document.getElementById("t60_org");

function moveDress(dragItem, container) {
  console.log("booooom");
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
let box11 = document.getElementById("box11");
let box12 = document.getElementById("box12");

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
let eleven = document.getElementById("eleven");
let twelve= document.getElementById("twelve");


let elms = [box1, box2, box3, box4, box5, box6,box7,box8,box9,box10,box11, box12, intro];
let figures = [t, t6, t11, t21, t16, t30, t34, t40, t50, t60, t70, t80];
let dresses1= [t, t1, t2, t3, t4, t5];
let dresses2 = [t6, t7, t8, t9, t10];
let dresses3 = [t11, t12, t13, t14, t15];
let dresses4 = [t21, t22, t23,t24,t25];
let dresses5= [t16, t18, t17, t19, t20];
let dresses6= [t30, t31, t32, t33];
let dresses7 =[t34, t35,t36,t37,t38,t39];
let dresses8 =[t40, t41,t42,t43,t44];
let dresses9 =[t50, t51,t52,t53,t54,t55,t56];
let dresses10 =[t60, t61,t62,t63,t64,t65,t66,t67];
let dresses11 =[t70, t71,t72,t73,t74];
let dresses12=[t80, t81,t82,t83,t84];
let button_t1= document.getElementById("button_t1");

function viewDresses(box, dress_list, cont) {
  button_t1.style.display="block";
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
let bt25 = document.getElementById("b-t25");

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
let bt71 = document.getElementById("b-t71");
let bt72 = document.getElementById("b-t72");
let bt73 = document.getElementById("b-t73");
let bt74 = document.getElementById("b-t74");
let bt81 = document.getElementById("b-t81");
let bt82 = document.getElementById("b-t82");
let bt83 = document.getElementById("b-t83");
let bt84 = document.getElementById("b-t84");

let allDresses = [t1,t2,t3,t4,t7,t8,t9,t13,t13,t14,t15,t22,t23,t24,t25,t18,t17,t19,t20,t31,t32,t33,t35,t36,t37,t38,t41,t42,t43,t44,t51,t52,t53,t54,t61,t62,t63,t64,t65,t66,t71,t72,t73,t74,t81,t82,t83,t84,t5,t10,t39,t55,t56,t67];
let allHats = [t5,t10,t39,t55,t56,t67];

function selectDress( figure, dress, dress_list){
  show_elm(figure);
  for (i=0; i < dress_list.length; i++){
    if (dress_list[i] == dress){
      show_elm(dress);
      show_elm(figure);
    } else {
      hide_elm(dress_list[i]);
    }
  }
  // for (i=0; i < ts.length; i++){
  //   hide_elm(ts[i]);
  // }
};

function selectHat(hat, t) {
  if (hat.style.display =="block"){
    hide_elm(hat);
  } else {
    // for (i=0; i < ts.length; i++){
    //   hide_elm(ts[i]);
    // }
    show_elm(t);
    show_elm(hat);
  }
};

function show_orig(src, org_id) {
  let org = document.createElement("img");
  org.classList.add("org_show");
  org.src= src;
  org.id=org_id;
  body.appendChild(org);
};

function remove_org(org_id){
  obj = document.getElementById(org_id);
  obj.remove();
};

function viewOrg (org_id, src){
  let element = document.getElementById(org_id);
  if (element != null) {
    remove_org(org_id);
  } else {
    show_orig(src, org_id);
  }
};

let t_org_src= "images/torchy/TorchyTogs.png";
let t6_org_src= "images/torchy/TorchyTogs2.png";
let t11_org_src ="images/torchy/TorchyTogs3.png";
let t21_org_src ="images/torchy/TorchyTogs4.png";
let t16_org_src ="images/torchy/TorchyTogs5.png";
let t30_org_src ="images/torchy/TorchyTogs6.png";
let t34_org_src ="images/torchy/TorchyTogs7.png";
let t40_org_src ="images/torchy/TorchyTogs8.png";
let t50_org_src ="images/torchy/TorchyTogs9.png";
let t60_org_src ="images/torchy/TorchyTogs10.png";
let t70_org_src ="images/torchy/TorchyTogs11.png";
let t80_org_src ="images/torchy/TorchyTogs12.png";

let t_org_img = "t_org_img";
let t6_org_img = "t6_org_img";
let t11_org_img = "t11_org_img";
let t21_org_img = "t21_org_img";
let t16_org_img = "t16_org_img";
let t30_org_img = "t30_org_img";
let t34_org_img = "t34_org_img";
let t40_org_img = "t40_org_img";
let t50_org_img = "t50_org_img";
let t60_org_img = "t60_org_img";
let t70_org_img = "t70_org_img";
let t80_org_img = "t80_org_img";

t_org.addEventListener("click", function() { viewOrg(t_org_img, t_org_src); }) ;
t6_org.addEventListener("click", function() { viewOrg(t6_org_img, t6_org_src); }) ;
t11_org.addEventListener("click", function() { viewOrg(t11_org_img, t11_org_src); }) ;
t21_org.addEventListener("click", function() { viewOrg(t21_org_img, t21_org_src); }) ;
t16_org.addEventListener("click", function() { viewOrg(t16_org_img, t16_org_src); }) ;
t30_org.addEventListener("click", function() { viewOrg(t30_org_img, t30_org_src); }) ;
t34_org.addEventListener("click", function() { viewOrg(t34_org_img, t34_org_src); }) ;
t40_org.addEventListener("click", function() { viewOrg(t40_org_img, t40_org_src); }) ;
t50_org.addEventListener("click", function() { viewOrg(t50_org_img, t50_org_src); }) ;
t60_org.addEventListener("click", function() { viewOrg(t60_org_img, t60_org_src); }) ;
t70_org.addEventListener("click", function() { viewOrg(t70_org_img, t70_org_src); }) ;
t80_org.addEventListener("click", function() { viewOrg(t80_org_img, t80_org_src); }) ;

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
eleven.addEventListener("click", function() { viewDresses(box11, dresses11, container11); }) ;
twelve.addEventListener("click", function() { viewDresses(box12, dresses12, container12); }) ;

bt1.addEventListener("click", function() { selectDress(t, t1, dresses1); }) ;
bt2.addEventListener("click", function() { selectDress(t, t2, dresses1); }) ;
bt3.addEventListener("click", function() { selectDress(t, t3, dresses1); }) ;
bt4.addEventListener("click", function() { selectDress(t, t4, dresses1); }) ;
bt5.addEventListener("click", function() { selectHat(t5, t); });
bt10.addEventListener("click", function() { selectHat(t10, t6); });
bt7.addEventListener("click", function() { selectDress(t6, t7, dresses2); }) ;
bt8.addEventListener("click", function() { selectDress(t6, t8, dresses2); }) ;
bt9.addEventListener("click", function() { selectDress(t6, t9, dresses2); }) ;
bt12.addEventListener("click", function() { selectDress(t11, t12, dresses3); }) ;
bt13.addEventListener("click", function() { selectDress(t11, t13, dresses3); }) ;
bt14.addEventListener("click", function() { selectDress(t11, t14, dresses3); }) ;
bt15.addEventListener("click", function() { selectDress(t11, t15, dresses3); }) ;
bt18.addEventListener("click", function() { selectDress(t16, t18, dresses5); }) ;
bt17.addEventListener("click", function() { selectDress(t16, t17, dresses5); }) ;
bt19.addEventListener("click", function() { selectDress(t16, t19, dresses5); }) ;
bt20.addEventListener("click", function() { selectDress(t16, t20, dresses5); }) ;
bt22.addEventListener("click", function() { selectDress(t21, t22, dresses4); }) ;
bt23.addEventListener("click", function() { selectDress(t21, t23, dresses4); }) ;
bt24.addEventListener("click", function() { selectDress(t21, t24, dresses4); }) ;
bt25.addEventListener("click", function() { selectDress(t21, t25, dresses4); }) ;
bt31.addEventListener("click", function() { selectDress(t30, t31, dresses6); }) ;
bt32.addEventListener("click", function() { selectDress(t30, t32, dresses6); }) ;
bt33.addEventListener("click", function() { selectDress(t30, t33, dresses6); }) ;
bt35.addEventListener("click", function() { selectDress(t34, t35, dresses7); }) ;
bt36.addEventListener("click", function() { selectDress(t34, t36, dresses7); }) ;
bt37.addEventListener("click", function() { selectDress(t34, t37, dresses7); }) ;
bt38.addEventListener("click", function() { selectDress(t34, t38, dresses7); }) ;
bt39.addEventListener("click", function() { selectHat(t39, t34); }) ;
bt41.addEventListener("click", function() { selectDress(t40, t41, dresses8); }) ;
bt42.addEventListener("click", function() { selectDress(t40, t42, dresses8); }) ;
bt43.addEventListener("click", function() { selectDress(t40, t43, dresses8); }) ;
bt44.addEventListener("click", function() { selectDress(t40, t44, dresses8); }) ;
bt51.addEventListener("click", function() { selectDress(t50, t51, dresses9); }) ;
bt52.addEventListener("click", function() { selectDress(t50, t52, dresses9); }) ;
bt53.addEventListener("click", function() { selectDress(t50, t53, dresses9); }) ;
bt54.addEventListener("click", function() { selectDress(t50, t54, dresses9); }) ;
bt55.addEventListener("click", function() { selectHat(t55, t50); }) ;
bt56.addEventListener("click", function() { selectHat(t56, t50); }) ;
bt61.addEventListener("click", function() { selectDress(t60, t61, dresses10); }) ;
bt62.addEventListener("click", function() { selectDress(t60, t62, dresses10); }) ;
bt63.addEventListener("click", function() { selectDress(t60, t63, dresses10); }) ;
bt64.addEventListener("click", function() { selectDress(t60, t64, dresses10); }) ;
bt65.addEventListener("click", function() { selectDress(t60, t65, dresses10); }) ;
bt66.addEventListener("click", function() { selectDress(t60, t66, dresses10); }) ;
bt67.addEventListener("click", function() { selectHat(t67, t60); }) ;
bt71.addEventListener("click", function() { selectDress(t70, t71, dresses11); }) ;
bt72.addEventListener("click", function() { selectDress(t70, t72, dresses11); }) ;
bt73.addEventListener("click", function() { selectDress(t70, t73, dresses11); }) ;
bt74.addEventListener("click", function() { selectDress(t70, t74, dresses11); }) ;
bt81.addEventListener("click", function() { selectDress(t80,t81, dresses12); }) ;
bt82.addEventListener("click", function() { selectDress(t80,t82, dresses12); }) ;
bt83.addEventListener("click", function() { selectDress(t80,t83, dresses12); }) ;
bt84.addEventListener("click", function() { selectDress(t80,t84, dresses12); }) ;


function showTorchy (torchy, elm){
  for (i=0; i < allDresses.length; i++){
    hide_elm(allDresses[i]);
  }
  hide_elm(torchy);
  console.log("!!!!");
  moveDress(elm, body);
  console.log("????");

}

function makeSelect (){
  items =[];
  for (i=0; i < allDresses.length; i++){
    if(allDresses[i].style.display =="block"){
      items.push(allDresses[i]);
      }
    }
  if (items.includes(t1) && items.includes(t5)) {
    let img = document.createElement("img");
    img.classList.add("torch");
    img.id="t_1_h";
    img.src="images/torchy/t-torchy1-h.png";
    let t_1_h = document.getElementById("t_1_h");
    body.appendChild(img);
    showTorchy(t, img);
  } else if (items.includes(t1)){
    let img2 = document.createElement("img");
    img2.classList.add("torch");
    img2.id="t_1";
    img2.src="images/torchy/t-torchy1.png";
    let t_1 = document.getElementById("t_1");
    body.appendChild(img2);
    showTorchy(t, img2);
    console.log("ding");
  } else if (items.includes(t4) && items.includes(t5)) {
    let img3 = document.createElement("img");
    img3.classList.add("torch");
    img3.id="t_4_h";
    img3.src="images/torchy/t-torchy4-h.png";
    let t_4_h = document.getElementById("t_4_h");
    body.appendChild(img3);
    showTorchy(t, img3);
  } else if (items.includes(t4)){
    let img4 = document.createElement("img");
    img4.classList.add("torch");
    img4.id="t_4";
    img4.src="images/torchy/t-torchy4.png";
    let t_4 = document.getElementById("t_4");
    body.appendChild(img4);
    showTorchy(t, img4);
  } else if (items.includes(t2) && items.includes(t5)) {
    let img5 = document.createElement("img");
    img5.classList.add("torch");
    img5.id="t_2_h";
    img5.src="images/torchy/t-torchy2-h.png";
    let t_2_h = document.getElementById("t_2_h");
    body.appendChild(img5);
    showTorchy(t, img5);
  } else if (items.includes(t2)){
    let img6 = document.createElement("img");
    img6.classList.add("torch");
    img6.id="t_2";
    img6.src="images/torchy/t-torchy2.png";
    let t_2 = document.getElementById("t_2");
    body.appendChild(img6);
    showTorchy(t, img6);
  } else if (items.includes(t3)){
    let img7 = document.createElement("img");
    img7.classList.add("torch");
    img7.id="t_3";
    img7.src="images/torchy/t-torchy3.png";
    let t_3 = document.getElementById("t_3");
    body.appendChild(img7);
    showTorchy(t, img7);
  } else if (items.includes(t7) && items.includes(t10)){
    let img8 = document.createElement("img");
    img8.classList.add("torch");
    img8.id="t6_7_h";
    img8.src="images/torchy/t6-torchy7-h.png";
    let t6_7_h = document.getElementById("t6_7_h");
    body.appendChild(img8);
    showTorchy(t6, img8);
  } else if (items.includes(t8) && items.includes(t10)){
    let img9 = document.createElement("img");
    img9.classList.add("torch");
    img9.id="t6_8_h";
    img9.src="images/torchy/t6-torchy8-h.png";
    let t6_8_h = document.getElementById("t6_8_h");
    body.appendChild(img9);
    showTorchy(t6, img9);
  } else if (items.includes(t9) && items.includes(t10)){
    let img10 = document.createElement("img");
    img10.classList.add("torch");
    img10.id="t6_9_h";
    img10.src="images/torchy/t6-torchy9-h.png";
    let t6_t9_h = document.getElementById("t6_9_h");
    body.appendChild(img10);
    showTorchy(t6, img10);
  } else if (items.includes(t7)){
    let img11 = document.createElement("img");
    img11.classList.add("torch");
    img11.id="t6_7";
    img11.src="images/torchy/t6-torchy7.png";
    let t6_7 = document.getElementById("t6_7");
    body.appendChild(img11);
    showTorchy(t6, img11);
  } else if (items.includes(t8)){
    let img12 = document.createElement("img");
    img12.classList.add("torch");
    img12.id="t6_8";
    img12.src="images/torchy/t6-torchy8.png";
    let t6_8 = document.getElementById("t6_8");
    body.appendChild(img12);
    showTorchy(t6, img12);
  } else if (items.includes(t9)){
    let img13 = document.createElement("img");
    img13.classList.add("torch");
    img13.id="t6_9";
    img13.src="images/torchy/t6-torchy9.png";
    let t6_9 = document.getElementById("t6_9");
    body.appendChild(img13);
    showTorchy(t6, img13);
  } else if (items.includes(t12)){
    let img14 = document.createElement("img");
    img14.classList.add("torch");
    img14.id="t11_12";
    img14.src="images/torchy/t11-torchy12.png";
    let t11_12 = document.getElementById("t11_12");
    body.appendChild(img14);
    showTorchy(t11, img14);
  } else if (items.includes(t13)){
    let img15 = document.createElement("img");
    img15.classList.add("torch");
    img15.id="t11_13";
    img15.src="images/torchy/t11-torchy13.png";
    let t11_13 = document.getElementById("t11_13");
    body.appendChild(img15);
    showTorchy(t11, img15);
  } else if (items.includes(t14)){
    let img16 = document.createElement("img");
    img16.classList.add("torch");
    img16.id="t11_14";
    img16.src="images/torchy/t11-torchy14.png";
    let t11_14 = document.getElementById("t11_14");
    body.appendChild(img16);
    showTorchy(t11, img16);
  } else if (items.includes(t15)){
    let img17 = document.createElement("img");
    img17.classList.add("torch");
    img17.id="t11_15";
    img17.src="images/torchy/t11-torchy15.png";
    let t11_15 = document.getElementById("t11_15");
    body.appendChild(img17);
    showTorchy(t11, img17);
  } else if (items.includes(t22)){
    let img18 = document.createElement("img");
    img18.classList.add("torch");
    img18.id="t21_22";
    img18.src="images/torchy/t21-torchy22.png";
    let t21_22 = document.getElementById("t21_22");
    body.appendChild(img18);
    showTorchy(t21, img18);
  } else if (items.includes(t23)){
    let img19 = document.createElement("img");
    img19.classList.add("torch");
    img19.id="t21_23";
    img19.src="images/torchy/t21-torchy23.png";
    let t21_23 = document.getElementById("t21_23");
    body.appendChild(img19);
    showTorchy(t21, img19);
  } else if (items.includes(t24)){
    let img20 = document.createElement("img");
    img20.classList.add("torch");
    img20.id="t21_24";
    img20.src="images/torchy/t21-torchy24.png";
    let t21_24 = document.getElementById("t21_24");
    body.appendChild(img20);
    showTorchy(t21, img20);
  } else if (items.includes(t25)){
    let img20a = document.createElement("img");
    img20a.classList.add("torch");
    img20a.id="t21_24";
    img20a.src="images/torchy/t21_torchy25.png";
    let t21_24 = document.getElementById("t21_25");
    body.appendChild(img20a);
    showTorchy(t21, img20a);
  } else if (items.includes(t17)){
    let img21 = document.createElement("img");
    img21.classList.add("torch");
    img21.id="t16_17";
    img21.src="images/torchy/t16-torchy17.png";
    let t16_17 = document.getElementById("t16_17");
    body.appendChild(img21);
    showTorchy(t16, img21);
  } else if (items.includes(t18)){
    let img22 = document.createElement("img");
    img22.classList.add("torch");
    img22.id="t16_18";
    img22.src="images/torchy/t16-torchy18.png";
    let t16_18 = document.getElementById("t16_18");
    body.appendChild(img22);
    showTorchy(t16, img22);
  } else if (items.includes(t19)){
    let img23 = document.createElement("img");
    img23.classList.add("torch");
    img23.id="t16_19";
    img23.src="images/torchy/t16-torchy19.png";
    let t16_19 = document.getElementById("t16_19");
    body.appendChild(img23);
    showTorchy(t16, img23);
  } else if (items.includes(t20)){
    let img24 = document.createElement("img");
    img24.classList.add("torch");
    img24.id="t16_20";
    img24.src="images/torchy/t16-torchy20.png";
    let t16_20 = document.getElementById("t16_20");
    body.appendChild(img24);
    showTorchy(t16, img24);
  } else if (items.includes(t31)){
    let img25 = document.createElement("img");
    img25.classList.add("torch");
    img25.id="t30_31";
    img25.src="images/torchy/t30-torchy31.png";
    let t30_31 = document.getElementById("t30_31");
    body.appendChild(img25);
    showTorchy(t30, img25);
  } else if (items.includes(t32)){
    let img26 = document.createElement("img");
    img26.classList.add("torch");
    img26.id="t30_32";
    img26.src="images/torchy/t30-torchy32.png";
    let t30_32 = document.getElementById("t30_32");
    body.appendChild(img26);
    showTorchy(t30, img26);
  } else if (items.includes(t33)){
    let img27 = document.createElement("img");
    img27.classList.add("torch");
    img27.id="t30_33";
    img27.src="images/torchy/t30-torchy33.png";
    let t30_33 = document.getElementById("t30_33");
    body.appendChild(img27);
    showTorchy(t30, img27);
  } else if (items.includes(t35) && items.includes(t39)) {
    let img28 = document.createElement("img");
    img28.classList.add("torch");
    img28.id="t30_35_h";
    img28.src="images/torchy/t30-torchy35-h.png";
    let t30_35_h = document.getElementById("t30_35_h");
    body.appendChild(img28);
    showTorchy(t30, img28);
  } else if (items.includes(t36) && items.includes(t39)) {
    let img29 = document.createElement("img");
    img29.classList.add("torch");
    img29.id="t30_36_h";
    img29.src="images/torchy/t30-torchy36-h.png";
    let t30_36_h = document.getElementById("t30_36_h");
    body.appendChild(img29);
    showTorchy(t30, img29);
  } else if (items.includes(t37) && items.includes(t39)) {
    let img30 = document.createElement("img");
    img30.classList.add("torch");
    img30.id="t34_37_h";
    img30.src="images/torchy/t34-torchy37-h.png";
    let t34_37_h = document.getElementById("t34_37_h");
    body.appendChild(img30);
    showTorchy(t34, img30);
  } else if (items.includes(t38) && items.includes(t39)) {
    let img31 = document.createElement("img");
    img31.classList.add("torch");
    img31.id="t34_38_h";
    img31.src="images/torchy/t34-torchy38-h.png";
    let t34_38_h = document.getElementById("t34_38_h");
    body.appendChild(img31);
    showTorchy(t34, img31);
  } else if (items.includes(t35)){
    let img32 = document.createElement("img");
    img32.classList.add("torch");
    img32.id="t34_35";
    img32.src="images/torchy/t34-torchy35.png";
    let t34_35 = document.getElementById("t34_35");
    body.appendChild(img32);
    showTorchy(t34, img32);
  } else if (items.includes(t36)){
    let img33 = document.createElement("img");
    img33.classList.add("torch");
    img33.id="t34_36";
    img33.src="images/torchy/t34-torchy36.png";
    let t34_36 = document.getElementById("t34_36");
    body.appendChild(img33);
    showTorchy(t34, img33);
  } else if (items.includes(t37)){
    let img34 = document.createElement("img");
    img34.classList.add("torch");
    img34.id="t34_37";
    img34.src="images/torchy/t34-torchy37.png";
    let t34_37 = document.getElementById("t34_37");
    body.appendChild(img34);
    showTorchy(t34, img34);
  } else if (items.includes(t38)){
    let img35 = document.createElement("img");
    img35.classList.add("torch");
    img35.id="t34_38";
    img35.src="images/torchy/t34-torchy38.png";
    let t34_38 = document.getElementById("t34_38");
    body.appendChild(img35);
    showTorchy(t34, img35);
  } else if (items.includes(t41)){
    let img36 = document.createElement("img");
    img36.classList.add("torch");
    img36.id="t40_41";
    img36.src="images/torchy/t40-torchy41.png";
    let t40_41 = document.getElementById("t40_41");
    body.appendChild(img36);
    showTorchy(t40, img36);
  } else if (items.includes(t42)){
    let img37 = document.createElement("img");
    img37.classList.add("torch");
    img37.id="t40_42";
    img37.src="images/torchy/t40-torchy42.png";
    let t40_42 = document.getElementById("t40_42");
    body.appendChild(img37);
    showTorchy(t40, img37);
  } else if (items.includes(t43)){
    let img38 = document.createElement("img");
    img38.classList.add("torch");
    img38.id="t40_43";
    img38.src="images/torchy/t40-torchy43.png";
    let t40_43 = document.getElementById("t40_43");
    body.appendChild(img38);
    showTorchy(t40, img38);
  } else if (items.includes(t44)){
    let img39 = document.createElement("img");
    img39.classList.add("torch");
    img39.id="t40_44";
    img39.src="images/torchy/t40-torchy44.png";
    let t40_44 = document.getElementById("t40_44");
    body.appendChild(img39);
    showTorchy(t40, img39);
  } else if (items.includes(t55) && items.includes(t51)) {
    let img40 = document.createElement("img");
    img40.classList.add("torch");
    img40.id="t50_51_h";
    img40.src="images/torchy/t50_torchy51_h.png";
    let t50_51_h = document.getElementById("t50_51_h");
    body.appendChild(img40);
    showTorchy(t50, img40);
  } else if (items.includes(t56) && items.includes(t51)) {
    let img41 = document.createElement("img");
    img41.classList.add("torch");
    img41.id="t50_51_h2";
    img41.src="images/torchy/t50_torchy51_h2.png";
    let t50_51_h2 = document.getElementById("t50_51_h2");
    body.appendChild(img41);
    showTorchy(t50, img41);
  } else if (items.includes(t55) && items.includes(t52)) {
    let img42 = document.createElement("img");
    img42.classList.add("torch");
    img42.id="t50_52_h";
    img42.src="images/torchy/t50_torchy52_h.png";
    let t50_52_h = document.getElementById("t50_52_h");
    body.appendChild(img42);
    showTorchy(t50, img42);
  } else if (items.includes(t56) && items.includes(t52)) {
    let img43 = document.createElement("img");
    img43.classList.add("torch");
    img43.id="t50_52_h2";
    img43.src="images/torchy/t50_torchy52_h2.png";
    let t50_52_h2 = document.getElementById("t50_52_h2");
    body.appendChild(img43);
    showTorchy(t50, img43);
  } else if (items.includes(t55) && items.includes(t53)) {
    let img44 = document.createElement("img");
    img44.classList.add("torch");
    img44.id="t50_53_h";
    img44.src="images/torchy/t50_torchy53_h.png";
    let t50_53_h = document.getElementById("t50_53_h");
    body.appendChild(img44);
    showTorchy(t50, img44);
  } else if (items.includes(t56) && items.includes(t53)) {
    let img45 = document.createElement("img");
    img45.classList.add("torch");
    img45.id="t50_53_h2";
    img45.src="images/torchy/t50_torchy53_h2.png";
    let t50_53_h2 = document.getElementById("t50_53_h2");
    body.appendChild(img45);
    showTorchy(t50, img45);
  } else if (items.includes(t55) && items.includes(t54)) {
    let img46 = document.createElement("img");
    img46.classList.add("torch");
    img46.id="t50_54_h";
    img46.src="images/torchy/t50_torchy54_h.png";
    let t50_54_h = document.getElementById("t50_54_h");
    body.appendChild(img46);
    showTorchy(t50, img46);
  } else if (items.includes(t56) && items.includes(t54)) {
    let img47 = document.createElement("img");
    img47.classList.add("torch");
    img47.id="t50_54_h2";
    img47.src="images/torchy/t50_torchy54_h2.png";
    let t50_54_h2 = document.getElementById("t50_54_h2");
    body.appendChild(img47);
    showTorchy(t50, img47);
  } else if (items.includes(t51)){
    let img48 = document.createElement("img");
    img48.classList.add("torch");
    img48.id="t50_51";
    img48.src="images/torchy/t50_torchy51.png";
    let t50_51 = document.getElementById("t50_51");
    body.appendChild(img48);
    showTorchy(t50, img48);
  } else if (items.includes(t52)){
    let img49 = document.createElement("img");
    img49.classList.add("torch");
    img49.id="t50_52";
    img49.src="images/torchy/t50_torchy52.png";
    let t50_52 = document.getElementById("t50_52");
    body.appendChild(img49);
    showTorchy(t50, img49);
  } else if (items.includes(t53)){
    let img50 = document.createElement("img");
    img50.classList.add("torch");
    img50.id="t50_53";
    img50.src="images/torchy/t50_torchy53.png";
    let t50_53 = document.getElementById("t50_53");
    body.appendChild(img50);
    showTorchy(t50, img50);
  } else if (items.includes(t54)){
    let img51 = document.createElement("img");
    img51.classList.add("torch");
    img51.id="t50_54";
    img51.src="images/torchy/t50_torchy54.png";
    let t50_54 = document.getElementById("t50_54");
    body.appendChild(img51);
    showTorchy(t50, img51);
  } else if (items.includes(t61) && items.includes(t67)){
    let img52 = document.createElement("img");
    img.classList.add("torch");
    img52.id="t60_61_h";
    img52.src="images/torchy/t60_torchy61_h.png";
    let t60_61_h = document.getElementById("t60_61_h");
    body.appendChild(img52);
    showTorchy(t60, img52);
  } else if (items.includes(t62) && items.includes(t67)){
    let img53 = document.createElement("img");
    img53.classList.add("torch");
    img53.id="t60_62_h";
    img53.src="images/torchy/t60_torchy62_h.png";
    let t60_62_h = document.getElementById("t60_62_h");
    body.appendChild(img53);
    showTorchy(t60, img53);
  } else if (items.includes(t63) && items.includes(t67)){
    let img54 = document.createElement("img");
    img54.classList.add("torch");
    img54.id="t60_63_h";
    img54.src="images/torchy/t60_torchy63_h.png";
    let t60_63_h = document.getElementById("t60_63_h");
    body.appendChild(img54);
    showTorchy(t60, img54);
  } else if (items.includes(t64) && items.includes(t67)){
    let img55 = document.createElement("img");
    img55.classList.add("torch");
    img55.id="t60_64_h";
    img55.src="images/torchy/t60_torchy64_h.png";
    let t60_64_h = document.getElementById("t60_64_h");
    body.appendChild(img55);
    showTorchy(t60, img55);
  } else if (items.includes(t65) && items.includes(t67)){
    let img56 = document.createElement("img");
    img56.classList.add("torch");
    img56.id="t60_65_h";
    img56.src="images/torchy/t60_torchy65_h.png";
    let t60_65_h = document.getElementById("t60_65_h");
    body.appendChild(img56);
    showTorchy(t60, img56);
  } else if (items.includes(t66) && items.includes(t67)){
    let img57 = document.createElement("img");
    img57.classList.add("torch");
    img57.id="t60_66_h";
    img57.src="images/torchy/t60_torchy66_h.png";
    let t60_66_h = document.getElementById("t60_66_h");
    body.appendChild(img57);
    showTorchy(t60, img57);
  } else if (items.includes(t61)){
    let img58 = document.createElement("img");
    img58.classList.add("torch");
    img58.id="t60_61";
    img58.src="images/torchy/t60_torchy61.png";
    let t60_61 = document.getElementById("t60_61");
    body.appendChild(img58);
    showTorchy(t60, img58);
  } else if (items.includes(t62)){
    let img59 = document.createElement("img");
    img59.classList.add("torch");
    img59.id="t60_62";
    img59.src="images/torchy/t60_torchy62.png";
    let t60_62 = document.getElementById("t60_62");
    body.appendChild(img59);
    showTorchy(t60, img59);
  } else if (items.includes(t63)){
    let img60 = document.createElement("img");
    img60.classList.add("torch");
    img60.id="t60_63";
    img60.src="images/torchy/t60_torchy63.png";
    let t60_63 = document.getElementById("t60_63");
    body.appendChild(img60);
    showTorchy(t60, img60);
  } else if (items.includes(t64)){
    let img61 = document.createElement("img");
    img61.classList.add("torch");
    img61.id="t60_64";
    img61.src="images/torchy/t60_torchy64.png";
    let t60_64 = document.getElementById("t60_64");
    body.appendChild(img61);
    showTorchy(t60, img61);
  } else if (items.includes(t65)){
    let img62 = document.createElement("img");
    img62.classList.add("torch");
    img62.id="t60_65";
    img62.src="images/torchy/t60_torchy65.png";
    let t60_65 = document.getElementById("t60_65");
    body.appendChild(img62);
    showTorchy(t60, img62);
  } else if (items.includes(t66)){
    let img63 = document.createElement("img");
    img63.classList.add("torch");
    img63.id="t60_66";
    img63.src="images/torchy/t60_torchy66.png";
    let t60_66 = document.getElementById("t60_66");
    body.appendChild(img63);
    showTorchy(t60, img63);
  } else if (items.includes(t71)){
    let img64 = document.createElement("img");
    img64.classList.add("torch");
    img64.id="t70_71";
    img64.src="images/torchy/t70_torchy71.png";
    let t70_71 = document.getElementById("t70_71");
    body.appendChild(img64);
    showTorchy(t70, img64);
  } else if (items.includes(t72)){
    let img65 = document.createElement("img");
    img65.classList.add("torch");
    img65.id="t70_72";
    img65.src="images/torchy/t70_torchy72.png";
    let t70_72 = document.getElementById("t70_72");
    body.appendChild(img65);
    showTorchy(t70, img65);
  } else if (items.includes(t73)){
    let img66 = document.createElement("img");
    img66.classList.add("torch");
    img66.id="t70_73";
    img66.src="images/torchy/t70_torchy73.png";
    let t70_73 = document.getElementById("t70_73");
    body.appendChild(img66);
    showTorchy(t70, img66);
  } else if (items.includes(t74)){
    let img67 = document.createElement("img");
    img67.classList.add("torch");
    img67.id="t70_74";
    img67.src="images/torchy/t70_torchy74.png";
    let t70_74 = document.getElementById("t70_74");
    body.appendChild(img67);
    showTorchy(t70, img67);
  } else if (items.includes(t81)){
    let img68 = document.createElement("img");
    img68.classList.add("torch");
    img68.id="t80_81";
    img68.src="images/torchy/t80-torchy81.png";
    let t80_81 = document.getElementById("t80_81");
    body.appendChild(img68);
    showTorchy(t80, img68);
  } else if (items.includes(t82)){
    let img69 = document.createElement("img");
    img69.classList.add("torch");
    img69.id="t80_82";
    img69.src="images/torchy/t80-torchy82.png";
    let t80_82 = document.getElementById("t80_82");
    body.appendChild(img69);
    showTorchy(t80, img69);
  } else if (items.includes(t83)){
    let img70 = document.createElement("img");
    img70.classList.add("torch");
    img70.id="t80_83";
    img70.src="images/torchy/t80-torchy83.png";
    let t80_83 = document.getElementById("t80_83");
    body.appendChild(img70);
    showTorchy(t80, img70);
  } else if (items.includes(t84)){
    let img71 = document.createElement("img");
    img71.classList.add("torch");
    img71.id="t80_84";
    img71.src="images/torchy/t80-torchy84.png";
    let t80_84 = document.getElementById("t80_84");
    body.appendChild(img71);
    showTorchy(t80, img71);
  }
};

button_t1.addEventListener("click", makeSelect);
