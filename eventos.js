document.addEventListener('DOMContentLoaded', () => {
  
    const button = document.getElementById('btnSaludar');
    button.addEventListener('click', () => {
        alert('Hola!');
    });
   
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.addEventListener('click', () => {
        alert('Hola! soy el div');
    });
});
