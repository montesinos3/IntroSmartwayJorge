// document.addEventListener("DOMContentLoaded", ready);


let infModo=sessionStorage.getItem('modo');
if(infModo==null) sessionStorage.setItem('modo', "claro");


// function ready() {
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
    
    let body = document.getElementById('body');
    let m = document.getElementById('menu');
    let f = document.getElementById('footer');

    if(sessionStorage.getItem('modo')=="claro"){
        body.className="claro";
        m.className="menuClaro";   
        f.className="footerclaro";
    } else{
        body.className="oscuro";
        m.className="menuOscuro";
        f.className="footeroscuro";
    }
// }

 function cambiarModo(){
    let infoModo=sessionStorage.getItem('modo');
    
    let pag=document.getElementById('body');
    let footer= document.getElementById('footer');
    let menu=document.getElementById('menu');
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


