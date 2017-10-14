function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var nested = document.getElementById('nested').querySelectorAll('div.target');
  return nested[0];
}

function increaseRankBy(n) {
  var ranks = document.getElementsByClassName('ranked-list');

  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = ((i + parseInt(n)).toString())
  }
}

function deepestChild() {
  let current = document.querySelectorAll('div#grand-node');
  var lastChild = [];

  if (current.length > 1) {
    return null;
  } else {

    while (current.length > 0) {
      for (let i = 0; current.length; i++) {
        lastChild.push(current[0]);
      }
      current = lastChild.shift();
    }

    return lastChild;
  }

}
