'use strict';

function quickSort(input) {
	if(input==null)
	{
		throw "Invalid array";
	}
	if(Array.isArray(input))
	{
		if(input.length==0)
		{
			return input;
		}
		
	}
var sortedArray=quickSort1(input, 0, input.length -1);
return sortedArray;

};

function  quickSort1(arr, left, right)
{
	var i = left;
	var j = right;
	var tmp;
	var pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);  
	while (i <= j)
	{
		while (parseInt(arr[i]) < pivot)
		i++;
		while (parseInt(arr[j]) > pivot)
			j--;
		if (i <= j)
		{
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}
	}
	if (left < j)
		quickSort1(arr, left, j);
	if (i < right)
		quickSort1(arr, i, right);
	return arr;
};
module.exports = quickSort;