const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

hasLocalStorage();

refs.checkbox.addEventListener('change', onChangeCheckbox);

function hasLocalStorage() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.DARK) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}
function setDarkTheme() {
  refs.body.classList.add('dark-theme');
  refs.checkbox.checked = true;
  localStorage.setItem('theme', Theme.DARK);
}
function setLightTheme() {
  refs.body.classList.add('light-theme');
  refs.checkbox.checked = false;
  localStorage.setItem('theme', Theme.LIGHT);
}
function onChangeCheckbox(event) {
  if (event.target.checked) {
    refs.body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

// console.log(refs.body);
