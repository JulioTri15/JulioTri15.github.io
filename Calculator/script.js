function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
      display.value = eval(display.value) || "";
  } catch (error) {
      display.value = "Error";
  }
}

function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('icon');
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark'); // Save dark theme preference
      icon.className = 'fa fa-moon'; // Change icon to moon
  } else {
      localStorage.setItem('theme', 'light'); // Save light theme preference
      icon.className = 'fa fa-sun'; // Change icon to sun
  }
}

// Load theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme'); // Apply dark theme
      document.getElementById('icon').className = 'fa fa-moon'; // Set icon to moon
  }
};
