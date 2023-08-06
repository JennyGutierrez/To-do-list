$(document).ready(function(){
  let taskCount = 0; // Inicializa el contador en 0

  $("#input").keypress(function(event){
    //detecta si la tecla presionada es Enter
    if (event.which === 13) {
      //trim ayuda a los valores vacios
      let input = $(this).val().trim();
      if (input !== '') {
        $("ul").append('<li>' + input + '<i class="fas fa-check"></i> <i class="fas fa-trash"></i> </li>');
        $(this).val('');
        taskCount++; // Incrementa el contador al agregar una tarea
        updateTaskCount(); // Llama a la función para actualizar el contador
      }
      event.preventDefault();
    }
  });

  //detecta el clic en el icono del bote de basura
  $('ul').on('click', '.fa-trash', function(){
    $(this).parent('li').fadeOut(200, function() {
      $(this).remove();
      taskCount--; // reduce el contador al eliminar una tarea
      updateTaskCount();
    });
  });

  // detecta el clic en el icono de la palomita
  $('ul').on('click', '.fa-check', function(){
    $(this).parent('li').toggleClass('checked');
  });

  function updateTaskCount() {
    $("#taskCount").text("Tareas pendientes: " + taskCount);
  }
});

//agregar funcion para que siga el mouse

// const cursor = $('.cursor');
// $(document).on('mousemove', event => {
//   cursor.css({ top: (event.pageY - 10) + 'px', left: (event.pageX - 15) + 'px' });
// });
// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', event => {
//   cursor.setAttribute("style", "top: " + (event.pageY -10) + "px; left: " + (event.pageX - 15) + "px;");
// })
