document.addEventListener('DOMContentLoaded', () => {
  const featureLink = document.querySelector('a[href="/features"]');
  const aboutUsLink = document.querySelector('a[href="/aboutus"]');

  featureLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '/features';
  });

  aboutUsLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '/aboutus';
  });
});

