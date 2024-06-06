swal({
    title: "Bienvenido",
    text: "Esta es la web de ByteStorm Solutions", 
    icon:"info" 
 });

function cambiarModo(){
    let pag=document.getElementsByTagName('body')[0];
    (pag.id=="claro") ? pag.id="oscuro" : pag.id="claro";
    // alert(`El id del body es ${document.getElementsByTagName('body')[0].id}`);


    let footer= document.getElementsByTagName('footer')[0];
    (footer.className=="claro") ? footer.className="oscuro" : footer.className="claro";
    // alert(`La clase del footer es ${document.getElementsByTagName('footer')[0].className}`);

    let menu=document.getElementsByTagName('nav')[0];
    (menu.id=="menuClaro") ? menu.id="menuOscuro" : menu.id="menuClaro";
    // alert(`El id del menu es ${document.getElementsByTagName('nav')[0].id}`)
}