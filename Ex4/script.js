var arr = [
	{value: 100, type: 'USD'},
	{value: 215, type: 'EUR'},
	{value: 7, type: 'EUR'},	
	{value: 99, type: 'USD'},
	{value: 354, type: 'USD'},
	{value: 12, type: 'EUR'},
	{value: 77, type: 'USD'},
];
console.log('USD < 100 :');
let usdSum = 0;
for(var i = 0; i < arr.length; i++){
    if(arr[i].value < 100 && arr[i].type === 'USD'){
    	usdSum += arr[i].value;
    }
}
console.log(`usdSum = ${usdSum}`);

for(var i = 0; i < arr.length; i++){
    if(arr[i].type === 'EUR'){
        arr[i].value *= 2;
        console.log(arr[i]);
    }
}
