var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

    // Before deleting rollno
    console.log(student);
    console.log(Object.keys(student).length);
    delete student.rollno;
    // After deleting rollno
    console.log(student);
    console.log(Object.keys(student).length);

     var library = [ 
            {
                author: 'Bill Gates',
                title: 'The Road Ahead',
                readingStatus: true
            },
            {
                author: 'Steve Jobs',
                title: 'Walter Isaacson',
                readingStatus: true
            },
            {
                author: 'Suzanne Collins',
                title:  'Mockingjay: The Final Book of The Hunger Games', 
                readingStatus: false
            }];
        
for(let i=0;i<library.length;i++)
            {
            //for(let j=0;j<library[i].length;j++)
            {
                console.log(library[i].title);
                console.log(library[i].author);
               console.log(library[i].readingStatus);
            }
        }

// Bubble Sort
// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping 
// the adjacent elements if they are in wrong order.
   
// Bubble Sort Code
function bubble(array){
    for(var i = 0; i<array.length;i++){
        for(var j = i+1;j<array.length;j++){
            if(array[i]>array[j]){
                [array[i],array[j]] = [array[j],array[i]];
                // let temp = arr[i];
                // arr[i] = arr[j];
                // arr[j] = temp;
            }
        }
        j--;
    }
    return array;
}

var a = [6,4,0,3,-2,1];
console.log(bubble(a));


// Other types of sorting

//  Bubble Sort.
//  Insertion Sort.
//  Selection Sort.
//  Quick Sort.
//  Merge Sort.
//  Heap Sort

function subString(str){
    var subset = [];
    for(let i = 0;i<str.length;i++){
    for(let j = i+1;j<str.length+1;j++){
        subset.push(str.slice(i,j));
    }
}
return subset;
}

console.log(subString("Dog"));

function Circle(radius){
    this.radius = radius;
    this.area = function(){
        return Math.PI*radius*radius;
    }
    this.perimeter = function(){
        return Math.PI*2*radius;
    }
}

var circle1 = new Circle(5);
console.log(circle1.radius);
console.log(circle1.perimeter());
console.log(circle1.area());


var librar = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

function compare_to_sort(x,y) 
 {
  if (x.title < y.title)
    return -1;
  if (x.title > y.title)
    return 1;
  return 0;
 }

console.log(librar.sort(compare_to_sort));


