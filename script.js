const parseCode = (str) => {
  // your code here
	const arr = str.split('/0+/');
	const obj = {
		firstName: arr[0],
		lastName: arr[1],
		id: arr[2],
	}
	return obj;
};

// Do not change the code below
// const str = prompt("Enter str: ");
// alert(JSON.stringify(parseCode(str)));
