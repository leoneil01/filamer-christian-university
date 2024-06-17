function validateLogin() {
    const tempUsername = 'stud';
    const tempPassword = 'stud';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === tempUsername && password === tempPassword) {
        window.location.href = '../views/student/dashboard.html';
    } else {
        document.getElementById('hint').textContent = `Hint: Username is ${tempUsername} and Password is ${tempPassword}`;
        document.getElementById('hint').style.display = 'block';
    }
}