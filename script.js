
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
        categoriaT=(smmlv*3.125);
    }else if(categoria=="Asistente de tiempo completo"){
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

function mostrar(){

    var cantDocente =0;

    var listadoDocentes = localStorage.getItem('listadoDocentes');
    if(!listadoDocentes){
        return false;
    }
    listadoDocentes =JSON.parse(listadoDocentes);
    var row = "";
    for (let i = 0; i < listadoDocentes.length; i++) {
        const e = listadoDocentes[i];
        row += '<tr>';
        row += '<td>'+ e.identificacion +'</td>';
        row += '<td>'+ e.nombre +'</td>';
        row += '<td>'+ e.bonificacion +'</td>';
        row += '<td>'+ e.categoria +'</td>';
        row += '<td>'+ e.semilleros +'</td>';
        row += '<td>'+ e.totalSalario +'</td>';
        row += '</tr>';

        
    }

    var listadoDocentesTabla = document.getElementById('listadoDocentes');


    cantDocente = listadoDocentes.length;
    listadoDocentesTabla.innerHTML = row;

    var cantDocentet = document.getElementById('cantDocentet');
    cantDocentet.innerHTML=cantDocente;
    console.log(cantDocente);
    

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