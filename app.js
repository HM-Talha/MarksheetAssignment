// alert("HELLO CLASS...")


// var name = " Talha";

// var age = 21;


// alert(name)


// var Name = "talha"

// var firstName = "Talha"
// var last_namE = "Shahtaj"

// alert(firstName + last_namE)


////MATH EXPRESSTION///
// +
// -
// *
// /
// %

// var num1 = 200;
// var num2 = 500;

// var add = num1 % num2

// alert(add)


// var result = (2-3) * 10 + 20;
//             //-1 * 10 +20
//             //-10 +20
//             //10

// alert(result)


// alert(3)
// alert(1)
// alert(2)


// var a = "50" ///string
// var b = 20 ////number


// document.write(a + b)


// var name = "Talha"
// var name2 = "Shahtaj"

// document.write(name + name2)

// var num1 = 30
// var num2 = 50

// document.write(num1 + num2)


// var num = 10;

// // var update_num = num++ //POST
// var update_num = ++num //PRE

// var num2 = num


// alert("update_num" + update_num);

// alert("num2" + num2)

// var num = 20;

// var update_num = --num //POST

// var num2 = num


// alert("update_num" + update_num);

// alert("num2" + num2)




// var a = 20;

// var result = a++  +   a++ - a  + ++a - a--
//             //  20   +   21  - 22 + 23  - 23
//             //  = 19



// alert(result)



// var a = 15;

// var result = a + a++ - a++ + a  - --a + a-- + a
//         //    =15 + 15 - 16  +  17 - 16  + 16 + 15


// alert(result)



// var a = 16;
// var result = a++ + a++ + a - a - --a - --a + ++a
//             //   + 17 

// alert(result)


// var userName  = prompt("User Name")

// document.write(userName)


// var firstName = prompt("First Name") 
// var lastName =  prompt("Last Name")

// document.write(firstName + " " + lastName)


//var name = prompt("enter your name");
//var age = prompt("enter age")
// var number = prompt("phone number")
// var address = prompt("address")

// document.write("NAME: "  + name )
// document.write("<br> age: " + age )
// document.write("<br> number: " + number )
// document.write("<br> address: " + address )




    ////
    // var ?name
    // var name = 

    // full name
    // school name
    // class 
    // eng 
    // urdu
    // isl
    // Math
    // science
    // obtained marks  
    // total mark   
    // percentage   (obt / total) * 100


    // -----------MarkSheet-----------//

    var name = prompt("Enter Your Name");
    var age = prompt("Enter Your Age")
    var schoolName = prompt("Enter Your School Name");
    var classs = prompt("Enter Your class");
    var rollNumber = prompt("Enter Your roll number");
    var english = prompt("Enter Your English Marks");
    var urdu = prompt("Enter Your Urdu Marks");
    var islamiat = prompt("Enter Your Islamiat Marks");
    var math = prompt("Enter Your Maths Marks");
    var science = prompt("Enter Your Science Marks");
    var obtainedMarks = parseInt(english) + parseInt(urdu) + parseInt(islamiat) + parseInt(math) + parseInt(science); 
    var percentage = obtainedMarks * 100 / 500 ;

    document.write("Name:" + " " + name + "<br>");
    document.write("Age:" + " " + age + "<br>");
    document.write("School Name:" + " " + schoolName + "<br>");
    document.write("Class:" + " " + classs + "<br>");
    document.write("Roll Number:" + " " + rollNumber + "<br>");
    document.write("Obtained Marks:" + " " + obtainedMarks + "<br>");
    document.write("Percentage:" + " " + percentage + "<br>");































