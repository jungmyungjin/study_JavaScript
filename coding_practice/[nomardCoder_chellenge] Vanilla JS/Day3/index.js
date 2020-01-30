
const body = document.querySelector('body');

function removeOtherBgColor (){
  if(body.className){
    if (body.classList.contains('bg_color')){
      console.log("i have other color");
      body.classList.remove(/bg_color./);
      if (body.classList.contains('bg_color')){
        console.log("remove sucssess!");
      }
      else{
        console.log("remove fail!");
      }
    }
  }
  else{
    console.log("class name flase");
  }
}

function changeColorResize() {
  const width = window.innerWidth;
  console.log(width);

  if ( body.className !== 'undefined'){
    console.log("class name : ",body.className);
  }
  else{
    console.log("class name : none");
  }

  removeOtherBgColor();
  if (width > 800) {
    body.classList.add("bg_color1");
  } 
  else if (width < 300) {
    body.classList.add("bg_color1");
  } 
  else {
    body.classList.add("bg_color1");
  }
}


window.addEventListener("resize", changeColorResize);
