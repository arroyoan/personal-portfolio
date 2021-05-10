// all the elements in the element that are needed
const aboutSection = document.querySelector('#about');
const navLogo = document.querySelector('.nav__logo');

// These are the options for the intersection observer
const options ={
  threshold:0.3
}

// helper functions

// call back function passed into obsever
const navChange = (entries,observer)=>{
 entries.forEach(entry => {
   if(entry.isIntersecting){
     navLogo.classList.remove("changeNav") ;
   } else{
     navLogo.classList.add('changeNav');
   }
 });
}

// creates the intersection observer
const observer = new IntersectionObserver(navChange,options);

// sets up the observer to watch when the splash container leaves the 
// screen to change the navbar styling
observer.observe(aboutSection);

