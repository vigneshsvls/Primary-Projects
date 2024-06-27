//let buttons=document.querySelector(".btn");
let sbt=document.querySelector(".s1");
let t1=document.querySelector(".textexam1");
let t2=document.querySelector(".textexam2");
let t3=document.querySelector(".textexam3");
let t4=document.querySelector(".textexam4");
let t5=document.querySelector(".textexam5");
let options=document.querySelector(".selectexam");

/*buttons.addEventListener("click", function() {
    console.log("clicked");
});*/

sbt.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(t1.value); 
    document.write("Name of the Student is: "+t1.value+'<br>');
    document.write("current semester of the student: "+t2.value+'<br>');
    document.write(options.value+'<br>');
    console.log((parseFloat(t3.value)+parseFloat(t4.value)+parseFloat(t5.value))/3);
    document.write("Total cgpa of the Student: "+(parseFloat(t3.value)+parseFloat(t4.value)+parseFloat(t5.value))/3+'<br>');
});

options.addEventListener("change",function(){
    console.log(options.value);
});
