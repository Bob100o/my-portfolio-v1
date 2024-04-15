let myindex = 0;
function carousel(){
  let i ;
  let x = document.getElementsByClassName("carousel-item")
  for (i=0;i<x.length;i++){
    x[i].style.display="none";
  }
  myindex++;
  if(myindex > x.length){
    myindex = 1
    
  }
  x[myindex-1].style.display = "block";
  setTimeout(carousel, 3000)
}
carousel();

const holi = "nnn"
console.log(holi)