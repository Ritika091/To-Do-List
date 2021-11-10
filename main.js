
// setting day
var todayContainer = document.querySelector("#today");
var d = new Date();

var weekday = new Array(7);
weekday[0] = "Sunday 🖖";
weekday[1] = "Monday 💪😀";
weekday[2] = "Tuesday 😜";
weekday[3] = "Wednesday 😌☕️";
weekday[4] = "Thursday 🤗";
weekday[5] = "Friday 🍻";
weekday[6] = "Saturday 😴";

var n = weekday[d.getDay()];

var randomWordArray = Array(
  "Oh my, it's ",
  "Whoop, it's ",
  "Happy ",
  "Seems it's ",
  "Awesome, it's ",
  "Have a nice ",
  "Happy fabulous ",
  "Enjoy your "
);
var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
todayContainer.innerHTML = randomWord + n;


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  // var txt = document.createElement("i");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}



// delete items
var close = document.getElementsByClassName("close");
var i;

// if(a==true){
for (i = 0; i < close.length; i++) {
  // var a= confirm("Are you sure you want to delete it?");
  // if(a==true){
  close[i].onclick = function() {
   
    // if(a==true){
    var div = this.parentElement;
    div.style.display = "none";
  // }



  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('name');
  }
}, false);

// Create a new list item
function newElement(){
  const list = document.querySelector('#todolist ul');
  var li = document.createElement("li");
  var inputValue = document.getElementById("title").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);


  if(inputValue == ''){
    alert("You must write something");
  }
  else{
    document.getElementById("todolist").appendChild(li);
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  // var txt = document.createElement("i");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      //div.style.display = "none";
      if(confirm("Are you sure you want to delete it?")===true)
      div.style.display = "none";
    }
  
  }

}
