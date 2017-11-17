var area = document.getElementById('insert-links');
var boton = document.getElementById('save');
var lista = document.getElementById('container-links');
//agregamos un evento
boton.addEventListener('click', function(event) {
    //verificamos si esta vacio o hay texto
    if(area.value) {
        var li = document.createElement('li');
        //creamos la 2da variable para
        var link = document.createElement('a');
        link.textContent = area.value;
        link.setAttribute('href', '#');
        //construimos le agregamos al contenedor de lista
        li.appendChild(link);
        lista.appendChild(li);
        //limpio el textcontent
        area.value = '';
    }
});