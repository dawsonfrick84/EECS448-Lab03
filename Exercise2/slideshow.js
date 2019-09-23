//slideshow.js

var image=[];
image[0]="images/The_White_Stripes.jpg";
image[1]="images/De_Stijl.jpg";
image[2]="images/White_Blood_Cells.jpg";
image[3]="images/Elephant.jpg";
image[4]="images/Get_Behind_Me_Satan.jpg";
image[5]="images/Icky_Thump.jpg";

function previous(){
  for (i=0; i<6; i++){
    if(document.getElementById("album").getAttribute('src')==image[i]){
      if(i==0){
        document.getElementById("album").src=image[5];
        break;
      }
      else{
        document.getElementById("album").src=image[i-1];
        break;
      }
    }
  }
}

function next(){
  for (i=0; i<6; i++){
    if(document.getElementById("album").getAttribute('src')==image[i]){
      if(i==5){
        document.getElementById("album").src=image[0];
        break;
      }
      else{
        document.getElementById("album").src=image[i+1];
        break;
      }
    }
  }
}
