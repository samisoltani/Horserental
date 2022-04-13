
let username = document.querySelector('#username');


document.querySelector('form').addEventListener('submit', (e) => {

  e.preventDefault();


  document.querySelector('h1').textContent = 'Hello ' + username.value + '!';


  username.value = '';
});
