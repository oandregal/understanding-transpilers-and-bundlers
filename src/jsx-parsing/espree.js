const espree = require('espree');

const result=  espree.parse( '<><p>Text</p><p>More</p></>', {
	ecmaFeatures: {
		jsx: true,
	}
});
console.log( JSON.stringify( result ) );
