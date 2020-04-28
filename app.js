// recupera todo el contenido de la fila
let plantilla = $('.row').html();

// borra el contenido de la fila
$('.row').html('');

// recupera los datos del servicio web utilizando ajax
$.get('https://www.breakingbadapi.com/api/characters')
	.done( function(datos){
		 muestraDatos(datos);
	} )
	.fail( function(error){
		console.log(error.statusText);	
	} );

// recorre la colleccion, y muestra los datos en la página
function muestraDatos (d) {

	for (let i = 0; i < d.length; i++) {
		
		let plnt = $(plantilla);

		plnt.find('.name').text( d[i].name );
		plnt.find('.birthday').text( d[i].birthday);
		plnt.find('.status').text( d[i].status );
		plnt.find('.nickname').text( d[i].nickname );
		
		 plnt.find('.img').attr('src', d[i].img);
		plnt.find('.audio').attr('src', d[i].audio);

		$('.row').append(plnt);
	}

}