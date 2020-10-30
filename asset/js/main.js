const $=document;

$.addEventListener("DOMContentLoaded",()=>{
    console.log("page chargée");

//au click partout sur la page, cela s'affiche dans la console
    //    $.addEventListener("click", () => {
   //   console.log("click !!");
  //  });
  
  
  $.querySelector("#contact-form").addEventListener("submit",async(event)=>{
//console.log(event);
event.preventDefault(); // annule le rafraichissement automatique de la page

const data = {
  firstname: $.querySelector("#firstname").value,
  lastname: $.querySelector("#lastname").value,
  email: $.querySelector("#email").value,
  subject: $.querySelector("#subject").value,
  message: $.querySelector("#message").value,
};
console.log(data);
const response =await axios.post("http://localhost:3000/",data);
console.log(response);
if(response.status !== 200){
  alert("Le formulaire n'a pas pu  etre envoyé")
}else{
  alert("Le formulaire à bien été envoyé");
}
  });
})