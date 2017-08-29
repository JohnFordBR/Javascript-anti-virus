// $( document ).ready(function() {
//   $( ".b1" ).click(function() {
//     $('.sec1').css('display','block');
//     $('.sec2').css('display','none');
//     $('.sec3').css('display','none');
//   });
//   $( ".b2" ).click(function() {
//     $('.sec1').css('display','none');
//     $('.sec2').css('display','block');
//     $('.sec3').css('display','none');
//   });
//   $( ".b3" ).click(function() {
//     $('.sec1').css('display','none');
//     $('.sec2').css('display','none');
//     $('.sec3').css('display','block');
//   });
// });
const b1 = document.getElementsByClassName('b1')[0];
const b2 = document.getElementsByClassName('b2')[0];
const b3 = document.getElementsByClassName('b3')[0];
const sec1 = document.getElementsByClassName('sec1')[0];
const sec2 = document.getElementsByClassName('sec2')[0];
const sec3 = document.getElementsByClassName('sec3')[0];
b1.addEventListener('click',()=>{
  sec1.style.display = "block" ;
  sec2.style.display = "none" ;
  sec3.style.display = "none" ;
});
b2.addEventListener('click',()=>{
  sec2.style.display = "block" ;
  sec1.style.display = "none" ;
  sec3.style.display = "none" ;
});
b3.addEventListener('click',()=>{
  sec3.style.display = "block" ;
  sec2.style.display = "none" ;
  sec1.style.display = "none" ;
});
