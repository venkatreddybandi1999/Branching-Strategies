const ageFunction = () => {
  var d1 = document.getElementById("date").value;
  var m1 = document.getElementById("month").value;
  var y1 = document.getElementById("year").value;
  age = document.getElementById("age");
  container = document.getElementById("container");
  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  console.log(date);
  console.log(d2);
  console.log(m2);
  console.log(y2);

  if (d1 > d2) {
    var month=[31,28,31,30,31,30,31,31,30,31,30,31]
    d2 = d2 + month[m2-1];
    m2 = m2 - 1;
  }
  if (m1>m2){
   m2=m2+12;
   y2=y2-1;
   }
  var d = d2 - d1;
  var y = y2 - y1;
  var m = m2 - m1;
  age.innerHTML = "Your age is " + y + " years " + m + " months " + d + " days";

  if (d1 == "") {
    age.innerHTML = "Please Enter  Date";
  } else if (m1 == "") {
    age.innerHTML = "Please Enter Month";
  } else if (y1 == "") {
    age.innerHTML = "Please Enter Year";
  }
  if (m1.length === 1) {
    age.innerHTML = "Please enter Month as 01,02,,";
  }
  if (d1.length === 1) {
    age.innerHTML = "Please Enter Date as 01,02,03,04";
  }
  if (y > 30) {
    age.innerHTML =
      "OMG! 😮 Your age is " + y + ". It's High time to marriage 👪";
  }

  container.style.height = 350 + "px";
};
button = document.getElementById("button");
button.addEventListener("click", ageFunction);

