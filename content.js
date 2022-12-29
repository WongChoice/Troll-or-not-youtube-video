window.addEventListener('load', function() {
  const subscribeButton = document.querySelector('#subscribe-button');
  if (subscribeButton) {
    const button = document.createElement('button');
    button.textContent = 'My button';
    button.style.cssText = 'margin-left: 10px';
    subscribeButton.parentNode.insertBefore(button, subscribeButton.nextSibling);
  }
});
console.log("test");