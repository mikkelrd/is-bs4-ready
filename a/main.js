document.addEventListener('DOMContentLoaded', function() {
  var milesContainer = document.getElementById('miles');
  var milesTemplate = milesContainer.firstElementChild.cloneNode(true);
  while (milesContainer.firstChild) {
    milesContainer.removeChild(milesContainer.firstChild);
  }

  var request = new XMLHttpRequest();

  request.addEventListener('load', function(){
    console.log(JSON.parse(this.responseText));

    JSON.parse(this.responseText)
    .filter(function(mile){ return mile.title.includes('v4'); })
    .sort(function(prevMile, currMile){ return prevMile.number > currMile.number })
    .forEach(function(mile){
      var newMile = milesTemplate.cloneNode(true);
      var label = newMile.children[0];
      var progress = newMile.children[1];

      label.children[0].textContent = mile.title;
      label.children[0].setAttribute('href', 'https://github.com/twbs/bootstrap/milestone/' + mile.number);
      label.children[1].textContent = 'Closed: ' + mile.closed_issues + ' ' + 'Open: ' + mile.open_issues;

      progress.setAttribute('value', mile.closed_issues);
      progress.setAttribute('max', mile.open_issues + mile.closed_issues);

      milesContainer.appendChild(newMile);
    });

  });

  request.open('GET', 'https://api.github.com/repos/twbs/bootstrap/milestones');
  request.send();

});
