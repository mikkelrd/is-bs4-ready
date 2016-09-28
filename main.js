var request = new XMLHttpRequest();
request.addEventListener("load", function(){
  var response = JSON.parse(this.responseText);
  console.log(response);

  
});
request.open("GET", "https://api.github.com/repos/twbs/bootstrap/milestones");
request.send();
