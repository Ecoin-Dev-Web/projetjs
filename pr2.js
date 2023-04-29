// var nom = prompt("plaese enter your name:")
// console.log(nom)


// var x = 100
// if (x>10) {
// console.log("yes is true")
// }else{
// 	console.log("no is false")
// }


// var num1= parseInt(prompt("enter first number:"))
// var num2= parseInt(prompt("enter second number:"))

// var operation=prompt("enter your opertion:")
// var calc;
// if(operation == "*") { 
//    calc= num1 * num2
// }else if(operation=="-")
// { 
//   calc=num1-num2
// }
// else if(operation=="+")
// { 
//   calc=num1+num2
// }
// else if(operation =="/") 
// { 
//   calc=num1/num2
// } 
// else{alert("no such operation")}

// console.log(calc)





// const user="admin"
// const password="lydia"

// var u =prompt("please enter username")
// var y = prompt("please enter password")

// if (u==user && p == password) {

// 	document.write('<div class="ok">welcom to my admin</div>')
// }else{ 

// document.write('<div class="error">error</div>')




// var num1=prompt("enter num1")
// num1=parseInt(num1)

// var num2=prompt("enternum2")
// num2=parseInt(num2)

// var color=prompt("enter color")
// var x= document.getElementsByTagName("body");
// switch(color) {
// case "red":
// x.style.backgroundColor="red"
// break;
// case "green":
// x.style.backgroundColor="green"
// break;

// case "blue":
// x.style.backgroundColor="blue"
// break;

// case "yellow":
// x.style.backgroundColor="yellow"
// break;



// } 


// var i= 100 
//  while(i>=0){ 
//     console.log(i) 
//     i--;
//  }

  // var str = "lydia" ; 
  // // console.log(str[1]);
  // let i =0
  // while(i < str.length){ 
  //    console.log(str[i]);
  //  i++;
  // }

// var oi =["php","kotlin","java","rust","go","python"]
        // 0      1        2      3      4      5
// let i= 0; 
// while(i< oi.length){
//   console.log(oi[i]+ "," + oi[i].length)
//   i++;
// } 
// for(let i =0 ; i<oi.length ; i++){ 
// 	console.log(oi[i]+ "," + oi[i].length)
// } 


var tab =new Array() ; 

for(i=0 ;i<6; i++){
	 tab[i]= parseInt(prompt("enter the numbers"))
} 



var tabPair=new Array();
var tabimPair=new Array();
 for(var i =0 ;i<tab.length ; i++){ 
  if(tab[i]%2 == 0){ 
     tabPair.push(tab[i]);
  }else{ 
       tabimPair.push(tab[i]);
  }
 } 

  console.log(tabPair);


  console.log(tabimPair);
