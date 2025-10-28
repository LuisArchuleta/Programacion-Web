let elemento= document.querySelector("#elemento");
let agregar=document.querySelector("#agregar");
let lista= document.querySelector("#listadinamica");
elemento.focus(); //cuando se da click a cualquier parte de la pagina se abre automaticamente el input

agregar.addEventListener("click",()=>{
    if(elemento.value.trim()!=""){
        let nuevoelemento=document.createElement("li"); //nuevo elemento tipo li
        nuevoelemento.innerText=elemento.value; //toma el texto del input
        lista.appendChild(nuevoelemento); //agrega el nuevo elemento a la lista
        elemento.value=""; //Vacia el input
        elemento.focus();//Vuelve el focus cuando se agrega
    }
})

elemento.addEventListener("keydown",(e)=>{//con keydown el input escucha al teclado, debe recibir un parametro (e)
    if(e.key=="Enter"){//si la tecla presionada es Enter
        agregar.click(); //Se llama al metodo click del boton agregar
    }
})

//Arrastrar y soltar
let arrastra=document.querySelector("#arrastra");
let zonasoltar=document.getElementById("zonasoltar");

arrastra.addEventListener("dragstart",function(e){ //con dragstart, la funcion de flecha (anonima) no funciona en algunos navegador entonces es mejor poner function
    this.style.border="5px solid red";
})

zonasoltar.addEventListener("dragover",function(e){ //dragover detecta cuando un elemento esta encima
    event.preventDefault();//El elemento olvida lo que hace por defecto, en este caso que otro elemento no pueda ser arrastrable sobre el
    
})

zonasoltar.addEventListener("drop",function(e){
    arrastra.style.border="none";//quita el borde rojo a arrastrar
    this.appendChild(arrastra);//agrega arrastra a zona soltar (this) 
})



//dos columnas, una con cuatro imagenes, y que se pueden arrastrar a la otra columna y viceversa, definir un width para que no cambie de tamanio