const base = "http://127.0.0.1:8000"
const url = base + "/login"

document.getElementById("btnLogin").addEventListener("click", async () => {
    // Obtener los valores de los campos de entrada
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    // Llamar a la función loginUser
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                password: password
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // La respuesta del servidor puede ser simplemente un mensaje
        const data = await response.json();
        console.log('Login successful:', data);

        Swal.fire({
            title: 'Login exitoso!',
            text: 'Serás redirigido al menú.',
            icon: 'success',
            timer: 2000, // Tiempo en milisegundos
            showConfirmButton: false
        }).then(() => {
            window.location.href = "menu.html"; // Asumiendo que menu.html está en la misma carpeta
        });

    } catch (error) {
        console.error('Error during login:', error);

        // Mostrar una alerta de error con SweetAlert2
        Swal.fire({
            title: 'Error',
            text: 'Hubo un problema con el inicio de sesión. Por favor, intenta de nuevo.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});

