$(function(){

	$('#7_button').click(function(){
		$('#results_field').append('7');
	});
	
	$('#8_button').click(function(){
		$('#results_field').append('8');
	});
	
	$('#9_button').click(function(){
		$('#results_field').append('9');
	});
	
		$('#divide_button').click(function(){
		$('#results_field').append('/');
	});
	
	//SPECIAL, DELETE LAST CHARACTER
	$('#delete_button').click(function(){
		//$('#results_field').append('');
		
		var str = $('#results_field').text();
		
		if(str.length>0){
			$('#results_field').text(str.substring(0,str.length-1));		
		}
	});
	
	$('#4_button').click(function(){
		$('#results_field').append('4');
	});
	
	$('#5_button').click(function(){
		$('#results_field').append('5');
	});
	
	$('#6_button').click(function(){
		$('#results_field').append('6');
	});
	
	$('#multiply_button').click(function(){
		$('#results_field').append('x');
	});
	
	$('#1_button').click(function(){
		$('#results_field').append('1');
	});
	
	$('#2_button').click(function(){
		$('#results_field').append('2');
	});
	
	$('#3_button').click(function(){
		$('#results_field').append('3');
	});
	
	$('#minus_button').click(function(){
		$('#results_field').append('-');
	});
	
	$('#decimal_button').click(function(){
		$('#results_field').append('.');
	});
	
	$('#0_button').click(function(){
		$('#results_field').append('0');
	});
	
	$('#plus_button').click(function(){
		$('#results_field').append('+');
	});
	
});