const addToLocalStorage = () => {
  idInput = document.getElementById('storage-id');
  const id = idInput.value;
  const valueInput = document.getElementById('storage-value');
  const value = valueInput.value;

  // input id and value set localStorage(if diye sruti check kora hoyeche)
  if(id && value){
    localStorage.setItem(id, value);
  }
  idInput.value = '';
  valueInput.value = '';
}


// localStorage j jody array ebong object set korte chai. tahole set korar jonno JSON.stringfy() kore set korte hobe. ebong seta k jodi abar pete chai tahole JSON.parse() kore pete hobe.