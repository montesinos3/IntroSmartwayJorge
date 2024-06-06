swal({
    title: "Bienvenido",
    text: "Esta es la web de ByteStorm Solutions", 
    icon:"info" ,
    buttons: {
        seguir:"Gracias",
        noMostrar: {text: "No volver a mostrar", value: false}, 
    },
    // buttons:true,
    
// }).then((value)=>{
//     return value
});

function cambiarModo(){
    let pag=document.getElementsByTagName('body')[0];
    (pag.className=="claro") ? pag.className="oscuro" : pag.className="claro";
    // alert(`El id del body es ${document.getElementsByTagName('body')[0].id}`);


    let footer= document.getElementsByTagName('footer')[0];
    (footer.className=="footerclaro") ? footer.className="footeroscuro" : footer.className="footerclaro";
    // alert(`La clase del footer es ${document.getElementsByTagName('footer')[0].className}`);

    let menu=document.getElementsByTagName('nav')[0];
    (menu.className=="menuClaro") ? menu.className="menuOscuro" : menu.className="menuClaro";
    // alert(`El id del menu es ${document.getElementsByTagName('nav')[0].id}`)
}