//const accordions = document.querySelectorAll('.accordian');

//accordions.forEach(accordion => {
 // const icon = accordion.querySelector('.icon');
  //const answer = accordion.querySelector('.answer');

  //accordion.addEventListener('click', () => {
//    icon.classList.toggle('active');
//    answer.classList.toggle('active');
 // });
//});

const accordions = document.querySelectorAll('.accordian');

accordions.forEach(accordion => {
 const icon = accordion.querySelector('.icon');
 const answer = accordion.querySelector('.answer');
 
 accordion.addEventListener('click',()=>{
 // icon.classList.toggle('active');
  //answer.classList.toggle('active');
  
  if(icon.classList.contains('active')){
   icon.classList.remove('active');
   answer.style.maxHeight='0';
  }else {
    icon.classList.add('active');
   answer.style.maxHeight = answer.scrollHeight +"px";
   
  }
  
 })
})

