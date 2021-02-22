const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for ( let i=1; i<=5; i++) { //the initializer, conditional, and the increment
  const newImage = document.createElement('img'); //new var as 'img'
  newImage.setAttribute('src', 'images/pic' + i + '.jpg'); //sets the attribute src, the pic number is value of i
  thumbBar.appendChild(newImage); //this adds the newImage to the thumbar
  newImage.onclick = function(e) {
    displayedImage.src = e.target.src;
  }
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
tn.onclick = function() { //this creates an click event for the button
  const btnClass = btn.getAttribute('class'); // takes the class of btn and sets btnClass equal to that value
  if(btnClass === 'dark') { //conditional checks if btn class is dark
    btn.setAttribute('class','light'); //if true, it sets btn clas to light
    btn.textContent = 'Lighten'; //then changes the text of btn to "lighten"
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; //changes the background color
  } else { //if the class of btn is light then run this next bit of code
    btn.setAttribute('class','dark'); //if light, change to dark
    btn.textContent = 'Darken'; //change the text to darken
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'; // and change the background color
  }
}
