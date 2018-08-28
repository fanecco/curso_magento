Product.Config.prototype.configureElement = Product.Config.prototype.configureElement.wrap(function(parentMethod, element){
	console.log('passou primeiro');
	return parentMethod(element);
});