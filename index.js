/* 1 */
let Coche = {
    marca: "Ford",
    modelo: "Fiesta",
    matricula: "QWE123",
  };
  /* 2 */
  let Casa =  {
    codPostal: "48954",
    calle: "123QWE",
    portal: "",
    piso: "",
  };
  /* 3 */
  let FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
  };
  /* 4 */
  let Perro = {
    nombre: "",
    raza: "",
    color: "",
    edad: "",
    ladrar: function() {
      console.log("¡Guau! ¡Guau!");
    },
    popo: function() {
      return Math.random() * 3;
    }
  };
  /* 5 */
  let marcaPortatil = Portatil.marca;
  /* 6 */
  
  let marcaPortatil2 = Portatil["marca"];
  /* 7 */
  let grupos = Concierto.array;
  /* 8 */
  let RGB = [Led.rojo, Led.verde, Led.azul];
  /* 9 */
  Portatil.modelo = "P345";
  /* 10 */
  Concierto.cartelera = "Guns N' Roses";
  /* 11 */
  Concierto.fecha = new Date('30/05/2023');
  /* 12 */
  Impresora.imprimiendo = {
    nombreArchivo: "documento.pdf",
    copias: 3,
    numPaginas: 10
  };
  /* 13 */
  let Noticia = {
    titular: "",
    cuerpo: "",
  };
  /* 14 */
  let Persona = {
    nombre: "",
    apellidos: "",
    edad: "",
  };
  /* 15 */
  let Avion = {
    numPasajeros: "",
    despegar: function() {
      console.log("despegando");
    },
    volar: function() {
      console.log("llegando al destino");
    },
    aterrizar: function() {
      console.log("aterrizando");
    }
  };
  /* 16 */
  let Paquete = {
    contenido: [],
  };
  
  /* 17 */
  let Pais = {
    numHabitantes: "",
    continente: "",
    gentilicio: "",
  };
  /* 18 */
  let codError = O_Error.codigo;
  
  /* 19 */
  let integrantes = Grupo.integrantes;
  /* 20 */
  let nivelesTinta = Impresora.tinta;
  /* 21 */
  var pixeles = Pantalla.pixeles;
  /* 22 */
  let especificaciones = Movil["especificaciones"];
  /* 23 */
  Grupo.numIntegrantes = 5;
  /* 24 */
  Pantalla.dimensiones = "1920x1080";
  /* 25 */
  Led.encendido = !Led.encendido;
  /* 26 */
  Movil.temperatura = "20º"