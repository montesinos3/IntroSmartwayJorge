if(sessionStorage.getItem('popup')!="no"){
    swal({
        title: "Bienvenido",
        text: "Esta es la web de ByteStorm Solutions", 
        icon:"info" ,
        buttons: {
            seguir:"Gracias",
            noMostrar: {text: "No volver a mostrar", value: false}, 
        },
    }).then((value)=>{
        if(value==false){
            //document.cookie="popup=no; max-age=60"
            sessionStorage.setItem('popup',"no")
        }
    });
}

let infoBody=sessionStorage.getItem('body');
if(infoBody==null) sessionStorage.setItem('body', "claro");

let body = document.getElementsByTagName('body')[0];
if(sessionStorage.getItem('body')=="claro"){
    body.className="claro";
} else{
    body.className="oscuro";
}



let infMenu=sessionStorage.getItem('menu');
//alert(infoMenu)
if(infMenu==null) sessionStorage.setItem('menu', "claro");
//alert(sessionStorage.getItem('menu'))
let m = document.getElementsByTagName('menu')[0];
if(sessionStorage.getItem('menu')=="claro"){
    m.className="menuClaro";
} else{
    m.className="menuOscuro";
}



let infFooter=sessionStorage.getItem('footer');
if(infFooter==null) sessionStorage.setItem('footer', "claro");

let f = document.getElementsByTagName('footer')[0];
if(sessionStorage.getItem('footer')=="claro"){
    f.className="footerclaro";
} else{
    f.className="footeroscuro";
}



//  function cambiarModo(){
//      let pag=document.getElementsByTagName('body')[0];
//      (pag.className=="claro") ? pag.className="oscuro" : pag.className="claro";
//      // alert(`El id del body es ${document.getElementsByTagName('body')[0].id}`);


//      let footer= document.getElementsByTagName('footer')[0];
//      (footer.className=="footerclaro") ? footer.className="footeroscuro" : footer.className="footerclaro";
//      // alert(`La clase del footer es ${document.getElementsByTagName('footer')[0].className}`);

//      let menu=document.getElementsByTagName('nav')[0];
//      (menu.className=="menuClaro") ? menu.className="menuOscuro" : menu.className="menuClaro";
//      // alert(`El id del menu es ${document.getElementsByTagName('nav')[0].id}`)
//  }

 function cambiarModo(){
    let infoPag=sessionStorage.getItem('body');
    let infoMenu=sessionStorage.getItem('menu');
    let infoFooter=sessionStorage.getItem('footer');

    let pag=document.getElementsByTagName('body')[0];
    if(infoPag=="claro"){
        pag.className="oscuro";
        sessionStorage.setItem('body', "oscuro");
    } else{
        pag.className="claro";
        sessionStorage.setItem('body', "claro");
    } 
    // alert(`El id del body es ${document.getElementsByTagName('body')[0].id}`);


    let footer= document.getElementsByTagName('footer')[0];
    if(infoFooter=="claro"){
        footer.className="footeroscuro";
        sessionStorage.setItem('footer', "oscuro");
    } else{
        footer.className="footerclaro";
        sessionStorage.setItem('footer', "claro");
    } 
    // alert(`La clase del footer es ${document.getElementsByTagName('footer')[0].className}`);

    let menu=document.getElementsByTagName('nav')[0];
    if(infoMenu=="claro"){
        menu.className="menuOscuro";
        sessionStorage.setItem('menu', "oscuro");
    } else{
        menu.className="menuClaro";
        sessionStorage.setItem('menu', "claro");
    } 
    // alert(`El id del menu es ${document.getElementsByTagName('nav')[0].id}`)
   
}
