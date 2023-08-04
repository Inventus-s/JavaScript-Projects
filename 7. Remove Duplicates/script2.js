function removeDuplicates() {
    const cartTextarea = document.getElementById('cart');
    const newCartTextarea = document.getElementById('newCart');
    const cartWithDuplicates = cartTextarea.value.split('\n').filter(item => item.trim() !== '');
    const newCart = Array.from(new Set(cartWithDuplicates));
    newCartTextarea.value = newCart.join('\n');
}
