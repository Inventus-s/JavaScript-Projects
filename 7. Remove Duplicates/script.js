function removeDuplicate() {
  const cartTextarea = document.getElementById('nameInput');
  const newCartTextarea = document.getElementById('result');
  const cartWithDuplicates = cartTextarea.value.split(',').filter(item => item.trim() !== '');
  const newCart = Array.from(new Set(cartWithDuplicates));
  newCartTextarea.value = newCart.join('\n');
}