var tareas=
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  
]
tareas.forEach(function(titulo){
  document.write("<li>"+"<b>Titulo :</b> "+titulo.title+"<br>"+"</li>")
})

function agregarTexto(){
  var agregar=document.getElementById("caja")
  var agrega=document.getElementsByClassName("agreg")
  agrega[0].innerHTML+="<li>"+"<b>Titulo :</b> "+agregar.value+"<br><li>";
  agregar.value = "";
  
   function lisTarea(vTarea){
    this.userId = 1;
    this.id = lisTarea.length;
    this.title = agregas.value;
    this.completed = false;
    }
    var list = new lisTareas(vTarea);
    return lista.push(tarea);
  

};
  