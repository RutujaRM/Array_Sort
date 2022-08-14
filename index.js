/*
Write a JavaScript program to sort the items of an array. 
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

 var marks = [3,8,7,6,5,-4,3,2,1];

     
// Print Before sorting array 

document.write("Original Array</br></br>"); 
document.write(marks); 
document.write("</br>")

         
// Sort elements using compare method 

marks.sort(function(a, b){return a - b});
document.write("</br>Sorted Array</br></br>"); 

     
// Print sorted Numeric array 
 document.write(marks);
 



