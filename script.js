
let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById('form-title').textContent = isLogin ? 'Login' : 'Signup';
  document.getElementById('toggle-text').innerHTML = isLogin
    ? "Don't have an account? <span onclick='toggleForm()'>Sign up</span>"
    : "Already have an account? <span onclick='toggleForm()'>Login</span>";
  document.getElementById('nameField').classList.toggle('hidden', isLogin);
  document.getElementById('message').textContent = '';
}

function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  if (!email || !password || (!isLogin && !name)) {
    message.textContent = 'Please fill all required fields.';
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message.textContent = 'Invalid email format.';
    return false;
  }

  if (password.length < 6) {
    message.textContent = 'Password must be at least 6 characters.';
    return false;
  }

  message.style.color = 'green';
  message.textContent = isLogin ? 'Login successful!' : 'Signup successful!';
  return true;
}
