// 1. Have a paragraph. On click of a button, alert the text in the paragraph.

// function click(){
//     var a = document.getElementsByTagName('p')
//     btn.addEventListener('click', function onClick(event){
//         alert ("Welcome users!");
//     });
// }
// click();



// 2. Have a paragraph. On click of a button, change the backgroundColor and text color of the paragraph.

// function button(){
// var btn = document.getElementById('btn');
// btn.addEventListener('click', function onClick(event) {
// document.querySelector('.welcome').style.color = 'red';
// document.querySelector('.welcome').style.backgroundColor = 'lightgrey';
// });
// }    
// button();



// 3. Have two text boxes. On click of a button, get the value from the first text box and assign that value to the second text box.

// function displayText(){
//     var txt1 = document.getElementById('txt-1');
//     var btn1 = document.getElementById('btn1');
//     var out1 = document.getElementById('output1');
//     out1.value = txt1.value; 
//     btn1.addEventListener('click',displayText);
// }
// displayText();


// 4. Have an image.

// function image() {
//     document.getElementById('myImage')
// }



// 4a. On click of a button, replace the image with another image.

// function image() {
//     var image = document.getElementById('myImage');
//     if (image.src.match("coding.png")) {
//         image.src = "image/welcome-to-coding.gif";
//     }
//     else {
//         image.src = "image/coding.png";
//     }
// }



// 4b. On click of a button, hide the image

// function image(){
//     var image = document.getElementById('myImage');
//    document.getElementById('myImage').style.display='none';
// }



// 4c. On click of a button, show the image

// function image(){
//     var image = document.getElementById('myImage');
//    document.getElementById('myImage').style.visibility='visible';
// }



// 5. Have an image and two buttons, PREV and NEXT. Have 10 images in an array. When you click on
// NEXT, the next picture should display and when you click on PREV, the previous image should display.

// var images = ['image/a.jpeg','image/b.jpeg','image/c.jpeg','image/d.jpeg','image/e.jpeg','image/f.jpeg','image/g.jpeg','image/h.jpeg','image/i.jpeg','image/j.jpeg'];

// var firstImage = 0;
// var lastImage = images.length -1;
// let currentImage = 0;
// // next
// var nextBtn = document.getElementById('next');
// nextBtn.addEventListener('click',()=>{

//         // get image tag
//         var imageTag = document.getElementById('image');
//         currentImage++; // 1
//         if(currentImage >= lastImage){
//             currentImage = 9;
//         }
//         imageTag.src = images[currentImage];
//         document.getElementById('info').innerHTML = (currentImage +1) + '/10';
// });
// // prev
// var preBtn = document.getElementById('prev');
// preBtn.addEventListener('click', ()=>{

//     // get image tag
//     var imageTag = document.getElementById('image');
//     currentImage--; // 1
//     if(currentImage <= firstImage){
//         currentImage = 0;
//     }
//     imageTag.src = images[currentImage];
//     document.getElementById('info').innerHTML = (currentImage +1) + '/10';
// });