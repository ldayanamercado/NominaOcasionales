
mostrar();

function capturarDatos(){

    var smmlv = 1000000;
    var bonificacionT=0;
    var totalsalario=0 ;
    var categoriaT=0;
    var semilleroT=0;
    var identificacion =document.getElementById("Identificación").value;
    var nombre =document.getElementById("Nombre").value;
    var semilleros = document.getElementById("semilleros").value;
    var bonificacion =document.getElementById("Bonificacion").value;
    var categoria =document.getElementById("categoria").value;

   // alert(semilleros);
  
  // var total = document.getElementById('total');
    // total.innerHTML = "hola";
      // Bonificacion
      if (bonificacion =="Especializacion"){
        bonificacionT = (smmlv*0.10);
    }else if (bonificacion =="Maestria"){
        bonificacionT = (smmlv*0.45);
    }else if (bonificacion =="Doctorado"){
        bonificacionT = (smmlv*0.90);
    }else if (bonificacion =="Postdotorado"){
        bonificacionT = 0;
    }

    // categoria 
    if (categoria=="Auxiliar de tiempo completo"){
        categoriaT=(smmlv*2.645);
    }else if(categoria=="Auxiliar de medio tiempo"){
        categoriaT=(smmlv*1.509);
    }else if(categoria=="Asistente de tiempo completo"){
        categoriaT=(smmlv*3.125);
    }else if(categoria=="Asistente de medio tiempo"){
        categoriaT=(smmlv*1.749);
    }else if(categoria=="Asociado de tiempo completo"){
        categoriaT=(smmlv*3.606);
    }else if(categoria=="Asociado de medio tiempo"){
        categoriaT=(smmlv*1.990);
    }else if(categoria=="Titular de tiempo completo"){
        categoriaT=(smmlv*3.918);
    }else if(categoria=="Titular de medio tiempo"){
        categoriaT=(smmlv*2.146);
    }

     
     // semillero
     if(semilleros=="A1"){
        semilleroT=(smmlv*0.56);
    }else if(semilleros=="A"){
        semilleroT=(smmlv*0.47);
    }else if(semilleros=="B"){
        semilleroT=(smmlv*0.42);
    }else if(semilleros=="C"){
        semilleroT=(smmlv*0.38);
    }else if(semilleros=="Reconocidos por colciencias"){
        semilleroT=(smmlv*0.33);
    }else if(semilleros=="Semilleros"){
        semilleroT=(smmlv*0.19);
    }else{
        semilleroT=0;
    }
    totalsalario= categoriaT + bonificacionT+semilleroT;
     console.log(totalsalario);

    const docenteOcasional = {
        identificacion: identificacion,
        nombre:nombre,
        bonificacion :bonificacion,
        categoria :categoria,
        semilleros:semilleros,
        totalSalario:totalsalario
      }
      if (identificacion.length==0 || /^\s+$/.test(identificacion) || isNaN(identificacion)){
        alert("Verifique el Número de Identificación");
     }else if (nombre.length==0 || /^\s+$/.test(nombre) ){
        alert("Verifique el Nombre");
     }else if(bonificacion == "Seleccione"){
        alert("seleccione un posgrado");
     }else if(categoria =="Seleccione" ){
        alert("seleccione una categoria");
     }else if(semilleros == "Seleccione"){
        alert("seleccione un grupo ");

     }
    else {
  
        var listadoDocentes = localStorage.getItem('listadoDocentes');
        if(listadoDocentes){
            listadoDocentes =JSON.parse(listadoDocentes);
        }else{
            listadoDocentes = [];
        }
        listadoDocentes.push(docenteOcasional);   

      localStorage.setItem("listadoDocentes", JSON.stringify(listadoDocentes));

      console.log(listadoDocentes);

    

      mostrar();
    }
    console.log("ya");
    
}

function mostrar(){

    var cantDocente =0;
    var semilleroT =0;
    var cantSemillero =0;
    var categoriaT=0;
    var cantCategoria =0;
    var cantBonificacion=0;
    var  bonificacionT=0;
    var smmlv=1000000;

    

    var nomina=0;
    var listadoDocentes = localStorage.getItem('listadoDocentes');
    if(!listadoDocentes){
        return false;
    }
    listadoDocentes =JSON.parse(listadoDocentes);
    var row = "";
    for (let i = 0; i < listadoDocentes.length; i++) {
        const e = listadoDocentes[i];
        row += '<tr>';
        row += '<td>'+ (i+1) +'</td>';
        row += '<td>'+ e.identificacion +'</td>';
        row += '<td>'+ e.nombre +'</td>';
        row += '<td>'+ e.bonificacion +'</td>';
        row += '<td>'+ e.categoria +'</td>';
        row += '<td>'+ e.semilleros +'</td>';
        row += '<td id="esSalario">'+ '$ '+e.totalSalario +'</td>';
        row += '</tr>';

        nomina += e.totalSalario;
        // Bonificacion
      if (e.bonificacion =="Especializacion"){
        bonificacionT = (smmlv*0.10);
    }else if (e.bonificacion =="Maestria"){
        bonificacionT = (smmlv*0.45);
    }else if (e.bonificacion =="Doctorado"){
        bonificacionT = (smmlv*0.90);
    }else if (e.bonificacion =="Postdotorado"){
        bonificacionT = 0;
    }

    // categoria 
    if (e.categoria=="Auxiliar de tiempo completo"){
        categoriaT=(smmlv*2.645);
    }else if(e.categoria=="Auxiliar de medio tiempo"){
        categoriaT=(smmlv*1.509);
    }else if(e.categoria=="Asistente de tiempo completo"){
        categoriaT=(smmlv*3.125);
    }else if(e.categoria=="Asistente de medio tiempo"){
        categoriaT=(smmlv*1.749);
    }else if(e.categoria=="Asociado de tiempo completo"){
        categoriaT=(smmlv*3.606);
    }else if(e.categoria=="Asociado de medio tiempo"){
        categoriaT=(smmlv*1.990);
    }else if(e.categoria=="Titular de tiempo completo"){
        categoriaT=(smmlv*3.918);
    }else if(e.categoria=="Titular de medio tiempo"){
        categoriaT=(smmlv*2.146);
    }
   
     // semillero
     if(e.semilleros=="A1"){
        semilleroT=(smmlv*0.56);
    }else if(e.semilleros=="A"){
        semilleroT=(smmlv*0.47);
    }else if(e.semilleros=="B"){
        semilleroT=(smmlv*0.42);
    }else if(e.semilleros=="C"){
        semilleroT=(smmlv*0.38);
    }else if(e.semilleros=="Reconocidos por colciencias"){
        semilleroT=(smmlv*0.33);
    }else if(e.semilleros=="Semilleros"){
        semilleroT=(smmlv*0.19);
    }else{
        semilleroT=0;
    }
    cantBonificacion += bonificacionT;
    cantCategoria += categoriaT;
    cantSemillero += semilleroT;
    }

    var listadoDocentesTabla = document.getElementById('listadoDocentes');
    cantDocente = listadoDocentes.length;
    listadoDocentesTabla.innerHTML = row;

    var cantDocentet = document.getElementById('cantDocentet');
    cantDocentet.innerHTML=cantDocente;
    console.log(cantDocente);

    var Totalnomina = document.getElementById('Totalnomina');
    Totalnomina.innerHTML=nomina;
    console.log(nomina);

    var Totalpregrado = document.getElementById('Totalpregrado');
    Totalpregrado.innerHTML=cantBonificacion;
    console.log(cantBonificacion);

    var TotalCategoria = document.getElementById('TotalCategoria');
    TotalCategoria.innerHTML=cantCategoria;
    console.log(cantCategoria);

    var TotalSemilleros = document.getElementById('TotalSemilleros');
    TotalSemilleros.innerHTML=cantSemillero;
    console.log(cantSemillero);



}




function gurdar1(){
    var listadoDocentes = localStorage.getItem('listadoDocentes');
    const docenteOcasional1= {
        identificacion: 12,
        nombre:"laura",
        categoria :"docenteOcasional",
        semilleros:"A1",
      }
      listadoDocentes.push(docenteOcasional1);   
      localStorage.setItem("listadoDocentes", JSON.stringify(listadoDocentes));

}