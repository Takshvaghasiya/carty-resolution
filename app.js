// Set this to your real Calendly or Cal.com URL when your account is ready.
const BOOKING_URL = '';
const menu = document.querySelector('.menu');
const navigation = document.querySelector('header nav');
menu.addEventListener('click', () => { const expanded = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!expanded)); menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation'); navigation.classList.toggle('open', !expanded); });
const dialog = document.querySelector('#booking');
document.querySelectorAll('[data-book]').forEach(button => button.addEventListener('click', () => { if (BOOKING_URL) { window.location.assign(BOOKING_URL); } else { dialog.showModal(); } }));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', event => { event.preventDefault(); const data = new FormData(form); const subject = 'Website inquiry: ' + data.get('service'); const body = 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\nService: ' + data.get('service') + '\n\n' + data.get('message'); window.location.href = 'mailto:disputereso2020@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body); document.querySelector('#form-status').textContent = 'Your email app should open with a draft. Review and send it to complete your request. You can also email disputereso2020@gmail.com directly.'; });