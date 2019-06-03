Parse.Cloud.define('averageStars', async (request) => {
	//var a = request.params.x
	var APPS = new Parse.Object('APPS');
	APPS.set('x', request.params.x);
	APPS.save();


	var BOOKS = new Parse.Object('BOOKS');
	BOOKS.set('b', request.params.b);
	BOOKS.save();	

	return'success';  
  //return ('Hello Pork, ' + a);
});

/*Parse.Cloud.define('Books', async(request) => {
	var book1 = request.params.books;
	var relation = book1;
}); */

Parse.Cloud.define('APPS', async(request) => {

	var author1 = request.params.APPS;
	var relation = author1.relation('books');
	var query = relation.query();

	return'success1';
})
    

function function_name(argument) {
	// body...
};