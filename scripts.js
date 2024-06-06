document.addEventListener("DOMContentLoaded", ready);


let infModo=sessionStorage.getItem('modo');
if(infModo==null) sessionStorage.setItem('modo', "claro");


function ready() {
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
    
    let body = document.getElementsByTagName('body')[0];
    let m = document.getElementsByTagName('nav')[0];
    let f = document.getElementsByTagName('footer')[0];

    if(sessionStorage.getItem('modo')=="claro"){
        body.className="claro";
        m.className="menuClaro";   
        f.className="footerclaro";
    } else{
        body.className="oscuro";
        m.className="menuOscuro";
        f.className="footeroscuro";
    }
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
    let infoModo=sessionStorage.getItem('modo');
    
    let pag=document.getElementsByTagName('body')[0];
    let footer= document.getElementsByTagName('footer')[0];
    let menu=document.getElementsByTagName('nav')[0];
    if(infoModo=="claro"){
        pag.className="oscuro";
        footer.className="footeroscuro";
        menu.className="menuOscuro";
        sessionStorage.setItem('modo', "oscuro");
    } else{
        pag.className="claro";
        footer.className="footerclaro";
        menu.className="menuClaro";
        sessionStorage.setItem('modo', "claro");
    } 
}


