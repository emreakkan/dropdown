/*
* @author Emre AKKAN
* @version V1.0
* @description
* Dropdown menu
*/

var dropdown = function(element){
	$(element).on('click', this.open);
}

dropdown.prototype.open = function(e){
	var element = $(this);
	var parent = $(this).parent('.dropdown');
	var target = element.attr('id');
	var isActive = parent.hasClass('open');

	dropdown.prototype.clear(e);
	if (!isActive){
		if (e.isDefaultPrevented())
			return

		parent.toggleClass('open');
	}

	return false
}

dropdown.prototype.clear = function(e){
	var toggle = '[data-toggle="dropdown"]';

	$(toggle).each(function(){
		var toggleThis = $(this);
		var toggleParent = toggleThis.parent();

		if (!toggleParent.hasClass('open'))
			return
		if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains(toggleParent[0], e.target))
			return
		if (e.isDefaultPrevented())
			return

		toggleParent.removeClass('open');
	});
}

$(document)
	.on('click', dropdown.prototype.clear)
	.on('click', '[data-toggle="dropdown"]', dropdown.prototype.open);