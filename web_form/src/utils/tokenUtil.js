export function setToken(tokenKey, token){
  localStorage.setItem(tokenKey, token);
}

export function removeToken(tokenKey){
  localStorage.removeItem(tokenKey);
}

export function getToken(tokenKey){
  return localStorage.getItem(tokenKey)
}

