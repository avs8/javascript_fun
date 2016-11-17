/**
 * Created by manishsinha on 11/14/16.
 */

function clunck (times) {
	var num = times;
	while (num > 0){
		display("clunk");
		num = num -1
	}
}

function thingamajig (size) {
	var facky = 1;
	clunkCounter = 0;
	if (size == 0) {
		display("clank");
	} else if (size == 1) {
		display("thunk");
	} else {
		while (size > 1) {
			facky = facky * size;
			size = size -1;
		}
		clunck(facky)
	}
}

function display(output) {
	console.log(output);
	clunkCounter = clunkCounter + 1;
}

var clunkCounter = 0;
thingamajig(3);
console.log(clunkCounter);


