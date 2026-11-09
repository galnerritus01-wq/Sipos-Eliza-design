document.querySelectorAll('form').forEach((form) => {
  const notice = form.querySelector('[data-privacy-notice]');
  const acknowledgement = form.elements.namedItem('privacy_acknowledged');
  if (!notice || !acknowledgement) return;

  acknowledgement.setCustomValidity('A jelölés előtt nyisd meg az adatkezelési tájékoztatót.');

  function unlock() {
    acknowledgement.setCustomValidity('');
    acknowledgement.removeEventListener('click', preventChecking);
  }

  function preventChecking(event) {
    event.preventDefault();
  }

  acknowledgement.addEventListener('click', preventChecking);
  notice.addEventListener('click', unlock, { once: true });
});
