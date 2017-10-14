function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var nested = document.querySelectorAll('div#nested');
  return nested.getElementsByClassName('target');
}
