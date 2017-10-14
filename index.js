function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementByClassName('target').querySelectorAll('div#nested');
}
