document.addEventListener('DOMContentLoaded', function() {

  var request = new XMLHttpRequest();

  request.addEventListener('load', function(){
    console.log(JSON.parse(this.responseText));
    var miles = document.getElementById('miles');

    JSON.parse(this.responseText).forEach(function(mile){
      var newMile = document.createElement('progress');

      newMile.classList.add('progress');
      newMile.setAttribute('value', Math.ceil(mile.open_issues / (mile.open_issues + mile.closed_issues) * 100));
      newMile.setAttribute('max', 100);

      miles.appendChild(newMile);
    });

  });

  request.open('GET', 'https://api.github.com/repos/twbs/bootstrap/milestones');
  request.send();

});
