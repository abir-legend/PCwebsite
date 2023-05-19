function writeToLocalStorage(key, value) {
    console.log(JSON.stringify(value));
  localStorage.setItem(key, JSON.stringify(value));
}

function readFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

function writeToCookie(key, value, expirationDays) {
  const expires = new Date();
  expires.setDate(expires.getDate() + expirationDays);

  document.cookie = `${key}=${JSON.stringify(value)};expires=${expires.toUTCString()};path=/`;
}

function readFromCookie(key) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${key}=`)) {
      const value = cookie.substring(key.length + 1);
      return JSON.parse(value);
    }
  }
  return null;
}
