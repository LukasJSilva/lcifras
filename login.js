document.addEventListener('DOMContentLoaded', function() {
    var btnEntrar = document.querySelector('.btn-login');
    var loginContainer = document.querySelector('.login-container');

    btnEntrar.addEventListener('click', function(event) {
        event.preventDefault();
        loginContainer.style.display = 'flex'; // Exibe a tela de login ao clicar em "Entrar"
    });
});

