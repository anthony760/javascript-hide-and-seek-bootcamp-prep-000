function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementsByClassName('target').querySelectorAll('div#nested');
}
