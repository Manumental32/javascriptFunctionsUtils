    $.ajaxSetup({
        error: function (x, status, error) {
            if (x.status == 403) {
                alert("Lo sentimos, su sesión ha expirado.");
                location.reload();
            }
        }
    });

    function validateForm () {
		var r = 0;

		for (var i = 0; i < arguments.length; i++) {
			// console.log(arguments[i]);
			var check = $('[name="' + arguments[i] + '"]').val().length > 0;

			if (check) {
				$('[name="' + arguments[i] + '"]').css("background-color", "");

				if ($('#content-right-message').length > 0) {
					$('#content-right-message').css('color', '');
					$('#content-right-message').html('');
				};

				if ($('#content-inner-message').length > 0) {
					$('#content-inner-message').css('color', '');
					$('#content-inner-message').html('');
				};

				r++;
			} else {
				$('[name="' + arguments[i] + '"]').css("background-color", "rgba(235, 20, 0, 0.25)");

				if ($('#content-right-message').length > 0) {
					$('#content-right-message').css('color', '#eb145a');
					$('#content-right-message').html('Debe completar todos los campos obligatorios (*).');
				};

				if ($('#content-inner-message').length > 0) {
					$('#content-inner-message').css('color', '#eb145a');
					$('#content-inner-message').html('Debe completar todos los campos obligatorios (*).');
				};
			};
		};

		if (r === arguments.length) {
			return true;
		} else {
			return false;
		};
	}

	

	//validarForm functions begin
	function validateInputs(array_inputs) {

		var r = 0;

		for (var i = 0; i < array_inputs.length; i++) {

			var name_input = $("[name='" + array_inputs[i] + "']"); //no juntar las 2 lineas de length y val()
			// console.log(name_input);
			var valor = name_input.val();
			var check = valor.length > 0;
			// console.log('check: '+check);

			if (check) {

				$('[name="' + array_inputs[i] + '"]').css("background-color", "");
				r++;

			} else {

				$('[name="' + array_inputs[i] + '"]').css("background-color", "rgba(235, 20, 0, 0.25)");

			};
		};

		if (r == array_inputs.length) {
			return true;
		} else {
			return false;
		}
	}

	function GetArrayNameOfInputsFrom(idForm) {

		var array_inputs = [];
		var inputs = $('#' + idForm + ' .validar');
		inputs.each(function(){ 
			array_inputs[array_inputs.length] = $(this).attr('name');
		})

		return array_inputs;
	}

	function validarForm(idForm) {
		var array_inputs = GetArrayNameOfInputsFrom(idForm);
		return validateInputs(array_inputs);
	}
	//validarForm functions end
	

	function validateFormWithPsw(){
		var r = 0;

		for (var i = 0; i < arguments.length; i++) {
			var check;
			//Checking the email format.
			if($(arguments[i]).attr('name').contains('mail')){
				check = validateEmail($(arguments[i]).val());
			} else {
				check = $(arguments[i]).val().length > 0;
			}

			if (check) {
				$(arguments[i]).css("background-color", "");
				r++;
			} else {
				$(arguments[i]).css("background-color", "rgba(235, 20, 0, 0.5)");
			}
		}

		if (r === arguments.length) {
			var pswIn = $("[name*='psw']");
			if(pswIn[0].value == pswIn[1].value){
				return true;
			} else {
				alert('Las contraseñas ingresadas deben ser iguales.');
				return false;
			}
		} else {
			return false;
		}
	}

	function changeChbox(element){
		if(element.checked == true){
			element.value = "1";
		} else {
			element.value = "0";
		}
	}

	function centrar() {
		iz=(screen.width-document.body.clientWidth) / 2;
		al=(screen.height-document.body.clientHeight) / 2;
		moveTo(iz,al);
	}




	function setDefaultsDatePicker(){
		//Set up to avoid auto-hide on select date. - Esto hace que cuando hagas click en una fecha, mantenga el Datepicker abierto
		// $.datepicker._selectDateOverload = $.datepicker._selectDate;
		// $.datepicker._selectDate = function(id, dateStr) {
		//     var target = $(id);
		//     var inst = this._getInst(target[0]);
		//     inst.inline = true;
		//     $.datepicker._selectDateOverload(id, dateStr);
		//     inst.inline = false;
		//     this._updateDatepicker(inst);
		// }

		//Default setup
		$.datepicker.regional['es'] = { // Default regional settings
				closeText: 'OK', // Display text for close link
				prevText: 'Ant', // Display text for previous month link
				nextText: 'Sig', // Display text for next month link
				currentText: '', // Display text for current month link
				monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'], // Names of months for drop-down and formatting
				monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'], // For formatting
				dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'], // For formatting
				dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'], // For formatting
				dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'], // Column headings for days starting at Sunday
				weekHeader: 'Sm', // Column header for week of the year
				dateFormat: 'yy-mm-dd', // See format options on parseDate
				firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
				isRTL: false, // True if right-to-left language, false if left-to-right
				showMonthAfterYear: false, // True if the year select precedes month, false for month then year
				yearSuffix: '', // Additional text to append to the year in the month headers
			};

		$.datepicker.setDefaults($.datepicker.regional['es']);
	}

	function setUpMinHeight(){
		var contentInner = document.getElementById('content-inner');
		var headerNav = document.getElementById('header-nav');

		if(contentInner != undefined && headerNav != undefined){
			contentInner.style.minHeight = headerNav.offsetHeight + 'px';
		}
	}

	function replaceAll( text, busca, reemplaza ){
  		while (text.toString().indexOf(busca) != -1){
  			text = text.toString().replace(busca,reemplaza);
  		}
  		return text;
	}

	function objectLoader (event, append) {
		function startLoader () {
			if ($('.loader').length === 0) {
				var loader = $('<div class="loader" id="loader"></div>');

				if ($(append).length === 0) {
					append = $('body');
				};

				$(loader)
					.appendTo($(append));

				var options = {
					lines: 11,
					length: 0,
					width: 5,
					radius: 10,
					corners: 1,
					rotate: 0,
					direction: 1,
					color: '#000000',
					speed: 1,
					trail: 75,
					shadow: false,
					className: 'loader-spinner',
					zIndex: 6500,
					top: '50%',
					left: '50%'
				};
				var target  = document.getElementById('loader');
				var spinner = new Spinner(options).spin(target);

				$(loader)
					.fadeIn(100);
			};
		}

		function stopLoader () {
			$('.loader')
				.fadeOut(100, function () {
					$(this).remove();
				});
		}

		if (event === 'start') {
			startLoader ();
		} else if (event === 'stop') {
			stopLoader ();
		};
	}


	function setDatePicker(selector, minMaxDate, value, yearRange){
		var minDate = "";
		var maxDate = "";
		var today = new Date();

		if((minMaxDate.indexOf("min") != -1) && (minMaxDate.indexOf("max") != -1)){
			minDate = value.split(':')[0];
			maxDate = value.split(':')[1];
		} else {
			if(minMaxDate.indexOf("min") != -1){
				minDate =  value;
			} else {
				maxDate =  value;
			}
		}

		$(selector).datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: "dd-mm-yy",
			minDate: minDate,
			maxDate: maxDate,
			showAnim: "slideDown",
			buttonImageOnly: false,
			yearRange: yearRange,
			setDate: today
		});
	}

	function setTitle (element, value) {
		$(element).attr('title', value);
	}

	function setConfirm (element, value) {
		$(element).click(function () {
			return confirm(value);
		})
	}

	function toggle(selector){
		$(selector).toggle('blind',500);
	}

	function isNumber(selector) {
			$(selector).keydown(function(event) {
			    if (!(!event.shiftKey //Disallow: any Shift+digit combination
			            && !(event.keyCode < 48 || event.keyCode > 57) //Disallow: everything but digits
			            || !(event.keyCode < 96 || event.keyCode > 105) //Allow: numeric pad digits
			            || event.keyCode == 46 // Allow: delete
			            || event.keyCode == 8  // Allow: backspace
			            || event.keyCode == 9  // Allow: tab
			            || event.keyCode == 27 // Allow: escape
			            || (event.keyCode == 65 && (event.ctrlKey === true || event.metaKey === true)) // Allow: Ctrl+A
			            || (event.keyCode == 67 && (event.ctrlKey === true || event.metaKey === true)) // Allow: Ctrl+C
			            //Uncommenting the next line allows Ctrl+V usage, but requires additional code from you to disallow pasting non-numeric symbols
			            //|| (event.keyCode == 86 && (event.ctrlKey === true || event.metaKey === true)) // Allow: Ctrl+Vpasting
			            || (event.keyCode >= 35 && event.keyCode <= 39) // Allow: Home, End
			            )) {
			        event.preventDefault();
			    }
			});
	}

	function validarCuit(cuit) {

        if(cuit.length != 11) {
            return false;
        }

        var acumulado   = 0;
        var digitos     = cuit.split("");
        var digito      = digitos.pop();

        for(var i = 0; i < digitos.length; i++) {
            acumulado += digitos[9 - i] * (2 + (i % 6));
        }

        var verif = 11 - (acumulado % 11);
        if(verif == 11) {
            verif = 0;
        } else if(verif == 10) {
            verif = 9;
        }

        return digito == verif;
	}



	function validateUserPassAjaxRoot(user, pass, root) {
	    if (typeof(user) == 'undefined' || typeof(pass) == 'undefined') {
	        objectResponse('error', 'Ocurrio un error.');
	        return false;
	    }

	    var ok = false;
	    var n = $('input[name="' + user + '"]').val();
	    var p = $('input[name="' + pass + '"]').val();

	    if (n.length > 0 && p.length > 0 ) {
	        $.ajax({
	            url: root, /*'ajax/ajax.validateuserpass.php'*/
	            type: 'POST',
	            dataType: 'json',
	            async: false,
	            data: {user: n, pw: p},
	        })
	        .done(function(data) {
	            if (data == 'true') {
	                ok = true;
	            } else {
	                ok = false;
	            }
	        })

	        if (ok != true) {
	            objectResponse('error', 'El usuario o clave son incorrectos.');
	            return false;
	        }  else {
	        	// console.log('submit');
	            return true;
	        }

	    } else {
	        objectResponse('error', 'Los campos no pueden estar vacíos.');
	        return false;
	    }
	}

function setAsteriscos(formID, asterisco){

	if (typeof(asterisco) == 'undefined') {
	    asterisco = '*';
	}

	$.each(GetArrayNameOfInputsFrom(formID), function(index, val) {
		var label = $('[name="' + val + '"]').siblings('[for="' + val + '"]');
		var texto = label.text();
		label.text(texto+ asterisco);	
	});
}

function openPopin (url, noFocus) {
	$('#popins').load(url, function (d) {
		$('#popin-background').fadeIn('fast', function () {
			$('#popin-content')
				.fadeIn(
						'slow',
						function(){
							if(noFocus == undefined && !noFocus){
								$($(this).find('input')[0]).focus();
							}
						}
				);
		});
	});
}

function closePopin (executeFunction) {
	$('#popin-content').fadeOut('slow', function () {
		$('#popin-background').fadeOut('fast', function () {
			$('#popin').remove();
			if(executeFunction != undefined){
				executeFunction();
			}
		});
	});
}

function loadFunctionsHead () {
	
	$('form#form-search')
		.submit(function (event) {
			event.preventDefault();
		});

	$('input[type="text"].date')
		.keyup(function () {
			$(this).val('');
		})
		.datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'dd-mm-yy',
			yearRange: 'c-100:c+1'
		});

	$('input[type="text"].time')
		.keyup(function () {
			$(this).val('');
		})
		.timepicker({
			timeFormat: 'HH:mm',
			stepMinute: 15
		});

	$('input[type="text"].datetime')
		.keyup(function () {
			$(this).val('');
		})
		.datetimepicker({
			timeFormat: 'HH:mm',
			stepMinute: 15
		});

	$('.tooltip, [title]')
		.tooltip({
			position: {
				my: 'center bottom',
				at: 'center top-5'
			}
		});

	$('input[type="text"].numeric')
		.numeric();

	$('input[type="text"].cuit')
		.mask('99-99999999-9');
} 

function loadFunctionsHeadNotDate () {
	
	$('form#form-search')
		.submit(function (event) {
			event.preventDefault();
		});

	$('.tooltip, [title]')
		.tooltip({
			position: {
				my: 'center bottom',
				at: 'center top-5'
			}
		});

	$('input[type="text"].numeric')
		.numeric();

	$('input[type="text"].cuit')
		.mask('99-99999999-9');
} 


/**
 * Suma los totales de una columna
 * @param  {[string number]} attrAsumar [nombre del atributo que contiene el número a sumar]
 * @param  {[string nombre de selector]} classTotal [nombre del selector donde poner el total]
 */
function sumarTotales(attrAsumar, classTotal) {

	$(classTotal).autoNumeric('init', {aDec: ',', aSep: '.', vMin: '-999999999.99', aPad:false });

	var total_monto = 0;
	$('table tbody tr td[' + attrAsumar + ']').each(function(){ 
		total_monto = +total_monto + parseFloat($(this).attr(attrAsumar));
	});

	$(classTotal)
		.autoNumeric('set',total_monto)
		.html('$ ' + $(classTotal).html());
}

/**
 * [elimino una fila de una tabla]
 * @param  {[string ]} classSelector [nombre de la clase]
 * @param  {[string]} attrID        [nombre del atributo en el icono]
 * @param  {[string]} ajaxUrl       [path de la peticion]
 * @param  {[string]} textConfirm   [texto para el confirm]
 */
function rowDelete(classSelector, attrID, ajaxUrl, textConfirm) {
	$(document).on('click', classSelector, function() {
		event.preventDefault();
		var id = $(this).attr(attrID);
		
		objectConfirm(textConfirm, function(confirmar) {
			if (confirmar) {
				$.post(ajaxUrl, { id :id }, function(response) {
					objectResponse(response.status, response.msg);
					if (response.status == 'success') {
						$('tr['+ attrID +' = '+ id + ']').remove();
					};
				},'json');
			};
		});
	});

}


//funcion para ordenar tablas segun un selector (.clase o #id) segun el contenido de los textos de cada celda en su columna correspondiente, recordar poner data-orden="valor" en el caso de contener un input ( usar .table-content si tiene tr detalle)
function sortable(table_selector) {

	$("table"+table_selector+" > thead > tr > th").click(function() {
	    var self = $(this);

		if (self.text() == '') {
			return false;
		};
		
	    var ix = $(this).index();

        $("table"+table_selector+" > tbody > tr").not('.table-content').sort(function(a, b) {

        	if (self.attr('data-orden') == 'asc') {
        		if ($(b).children("td").eq(ix).attr("data-orden") != undefined) {
		        	var text_a = $(b).children("td").eq(ix).attr("data-orden").toLowerCase();
        			var text_b = $(a).children("td").eq(ix).attr("data-orden").toLowerCase();
        		} else {
		        	var text_a = $.trim($(b).children("td").eq(ix).text().toLowerCase());
        			var text_b = $.trim($(a).children("td").eq(ix).text().toLowerCase());
        		}

		    } else {

        		if ($(b).children("td").eq(ix).attr("data-orden") != undefined) {
					var text_a = $(a).children("td").eq(ix).attr("data-orden").toLowerCase();
	        		var text_b = $(b).children("td").eq(ix).attr("data-orden").toLowerCase();
		        } else {
			        var text_a = $.trim($(a).children("td").eq(ix).text().toLowerCase());
	        		var text_b = $.trim($(b).children("td").eq(ix).text().toLowerCase());
		        }
		    }
			

        	if(!$.isNumeric(text_a)){
	        	if(text_a.indexOf("$") != -1) {
	        		text_a = text_a.replace('$', '');
	        		text_b = text_b.replace('$', '');
		        	text_a = parseInt(text_a);
		        	text_b = parseInt(text_b);
		        	
				    return (text_a < text_b) ? 1 : -1;
	        	}

        	} else {
	        	text_a = parseInt(text_a);
	        	text_b = parseInt(text_b);
	        	
			    return (text_a < text_b) ? 1 : -1;
        	}

		    return text_a.localeCompare(text_b);

        }).appendTo("table"+table_selector);

		if ($(this).attr('data-orden') == 'asc') {
	        $("table"+table_selector+" > thead > tr > th").removeAttr('data-orden');
	        $(this).attr("data-orden", 'desc');
	    } else {
	        $("table"+table_selector+" > thead > tr > th").removeAttr('data-orden');
	        $(this).attr('data-orden', 'asc');
	    }
	    
	    $("table"+table_selector+" > tbody > tr.table-content").each(function () {
	        var or = $(this).attr('data-orden');
	        $('table'+table_selector+' > tbody > tr[data-orden="' + or + '"]').not('.table-content').after($(this));
	    })
	});
}


function validateFormWithMail() {

	var r = 0;

	for (var i = 0; i < arguments.length; i++) {

		var check = $('[name="' + arguments[i] + '"]').val().length > 0;
		//Checking the email format.
		if($('[name="' + arguments[i] + '"]').attr('name').contains('mail')){
			check = validateEmail('[name="' + $(arguments[i]).val() + '"]');
		} else {
			check = $('[name="' + arguments[i] + '"]').val().length > 0;
		}

		if (check) {
			$('[name="' + arguments[i] + '"]').css("background-color", "");

			r++;
		} else {
			$('[name="' + arguments[i] + '"]').css("background-color", "rgba(235, 20, 0, 0.5)");
		}
	}

	if (r === arguments.length) {
		return true;
	} else {
		return false;
	}
}
//This function will validate the emails using a regular expression.
function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

///////////////////////////////////
//begin listado load scroll functions //
///////////////////////////////////
function limpiar_scroll_last(pTotal) {
	$('#resultado_listado table tbody').html('');
  	var total = pTotal == undefined ? 0 : pTotal;
	var html_scrol = $.parseHTML('<div class="table-scroll"><form method="POST" class="col12" id="form-scroll"><input type="hidden" name="scroll_last" value="'+total+'"></form></div>');
	$('#resultado_listado').append(html_scrol);
}
      
// Cuando declaras las funciones al final del body en un archivo separado llamas a está función y a todas las que dependan de la variables Global

function listado_scroll (url, pLast, pCant_tr) {
	
  	var last = pLast == undefined ? 0 : pLast;
  	var cant_tr = pCant_tr == undefined ? 0 : pCant_tr;

	$.ajax({
		url: url,
		type: 'POST',
		async:false,
		dataType: 'html',
		data: $('#form-search, #form-scroll').serialize(),
		beforeSend: function(e){

			cant_tr = $('#resultado_listado table tbody tr').size();
			total = $('#resultado_listado table tbody tr').last().attr('data-total');
			cant_scroll = $('#resultado_listado table tbody tr:last').attr('data-scroll');

			if (cant_tr == total || cant_scroll == '') {
				return false;
			};
			//si hay mas registros cargo el loader debajo del body sino en el body
			if ($('#form-scroll input[name="scroll_last"]').val() != 0) {
				objectLoader ('start', $('.table-scroll'));
			} else {
				objectLoader('start', $('#resultado_listado table tbody'));// INICIO EL LOADER
			}
		},
	})
	.done(function(response) {
		$('#resultado_listado table tbody').append(response);
		last = $('#resultado_listado table tbody tr').last().attr('data-scroll');
		$('#form-scroll input[name="scroll_last"]').val(last);

		loadFunctionsHead();
	})
	.always(function() {
		objectLoader('stop');
	});
	
}


function listado_load_scroll(url) {
	limpiar_scroll_last();
    listado_scroll(url);

    $('#form-search :input[type="text"],#form-search select').change(function(e) {
        limpiar_scroll_last();
        listado_scroll(url);
    });
  
  	$(window).scroll(function () {
      if (($(window).scrollTop() + $(window).height()) > ($(document).height())) {
          listado_scroll(url);
      };
	});
}
/////////////////////////////////
//end listado load scroll functions //
/////////////////////////////////
	
