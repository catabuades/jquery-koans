describe('Selectors', function() {
	beforeEach(function() {
		$('#fixture').remove();
		$('body').append('<div id="fixture"></div>');
		$('#fixture').html(
				'<div class="div_class" id="div-1" />'+
				'<div id="div-2">'+
				'	<div id="div-2-child">'+
				'		<div id="div-2-grandchild" />'+
				'   </div>'+
				'</div>'+
				'<div class="div_class" id="div-3" />');

		this.addMatchers(jQueryKataMatchers);
	});

	it('selects element by id', function() {
		expect($("#div-2").attr('id')).toEqual('div-2');
	});

	it('selects elements by class', function() {
		expect($(".div_class").attr('class')).toEqual('div_class');
	});

	it('selects child element DIV', function() {
		expect($('#div-2 > div').attr('id')).toEqual('div-2-child');
	});

	it('selects descendent element DIV', function() {
		expect($('#div-2 #div-2-grandchild').attr('id')).toEqual("div-2-grandchild");
	});

	it('selects all DIVs', function() {
		expect($('#fixture div').length).toEqual(5);
	});

	it('iterates through matched elements', function() {
		var matchedElements = [];
		$('.div_class').each(function() {
			matchedElements.push({'id':$(this).attr('id')});
		});

		expect(matchedElements.length).toEqual(2);
		expect(matchedElements[1].id).toEqual("div-3");
	});

});