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
  let curent = document.querySelectorAll('div#grand-node');
}
