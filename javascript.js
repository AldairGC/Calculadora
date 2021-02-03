$(function()
    {
    //alert("Hola mundo desde jquery");
    $('.btn-numero').on('click', function()
    {
        var numero = $(this).text();
        var display = $('#display').val();
        $('#display').val(display + numero);
    }
    );

      $('.btn-operador').on('click', function()
      {
        var display = $('#display').val();
        var operador = $(this).text();
        $('#display').val(display + operador);
      });

      $('#btn-punto').on('click', function()
      {
        var display = $('#display').val();
        $('#display').val(display + '.');
      });

      $('#btn-limpiar').on('click', function()
      {
        $('#display').val('');
      });

      $('#btn-inverso').on('click', function()
      {
        var display = $('#display').val();
        $('#display').val(1/display);
      });

      $('#btn-cuadrado').on('click', function()
      {
        var display = $('#display').val();
        $('#display').val(display * display);
      });

      $('#btn-igual').on('click', function()
      {
        var display = $('#display').val();
        if(display.includes(' + '))
        {
          //alert('Es una suma');
          operandos = display.split(' + ');
          console.log(operandos);
          $('#display').val(parseFloat(operandos[0]) + parseFloat(operandos[1]));

        } else if(display.includes(' - '))
        {
          //alert('Es una resta');
          operandos = display.split(' - ');
          $('#display').val(parseFloat(operandos[0]) - parseFloat(operandos[1]));

        } else if(display.includes(' x '))
        {
          //alert('Es una multiplicacion');
          operandos = display.split(' x ');
          $('#display').val(parseFloat(operandos[0]) * parseFloat(operandos[1]));
          
        } else 
        {
          //alert('Division');
          operandos = display.split(' / ');
          $('#display').val(parseFloat(operandos[0]) / parseFloat(operandos[1]));
        }
    });
})
