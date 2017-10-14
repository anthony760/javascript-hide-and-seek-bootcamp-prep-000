function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementsByClassName('target').querySelector('div#nested');
}
