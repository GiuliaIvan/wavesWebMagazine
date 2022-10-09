// Inspiration
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img

// Get the modal
var modal = document.getElementById("myModal");

// Get the 1st comic image and insert it inside the modal
var img = document.getElementById("episodes-image");
var comicsButton1 = document.getElementById("button-comic1");
var modalImg = document.getElementById("img01");
comicsButton1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = `/Images/comic1-resize.png`;
}

// Get the 2nd comic image and insert it inside the modal
var comicsButton2 = document.getElementById("button-comic2");
comicsButton2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = `/Images/comic2-resize.png`;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}