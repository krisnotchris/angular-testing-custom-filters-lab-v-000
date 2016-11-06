describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		// $filter = $injector.get('$filter');
    favoriteFood = $filter('favoriteFood');
	}));

  it('should return elements from array (arg 1) that match input (arg 2)', function(){
    var people_array = [
      {"name" : "john",
      "favoriteFood" : "tacos"},
      {"name" : "jill",
      "favoriteFood" : "burgers"}
    ];
    expect(favoriteFood(people_array, 'tacos')[0].name).toEqual('john');
  });

});
