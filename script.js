function changeTheme() {
  const body = document.body;
  const isDark = body.style.backgroundColor === 'rgb(34, 34, 34)';
  body.style.backgroundColor = isDark ? '#f4f4f4' : '#222';
  body.style.color = isDark ? 'black' : 'white';
}
