const inputLogIn = document.getElementById('logInText') 
        const buttonLogIn = document.querySelector('.logInButton')
        const resultadoElement = document.getElementById('resultado');
        

        buttonLogIn.addEventListener('click', function() {
            const input = inputLogIn.value;
            contraseñaValida(input);
        });

        function contraseñaValida(input) {
            if (input === "2Fj(jjbFsuj" || input === "eoZiugBf&g9") {
                alert("Contraseña correcta");
                resultadoElement.textContent = "Contraseña correcta";
            } else {
                alert("Contraseña incorrecta");
                resultadoElement.textContent = "Contraseña incorrecta";
            }
        }






