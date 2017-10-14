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
  var lastChild;

  if (current.length === 1) {
    return current[0];
  } else if (current.length > 1) {
    lastChild = current[0];
  } else {
    return null;
  }


}
