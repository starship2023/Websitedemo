const items = document.querySelectorAll('.menuitem');

items.forEach(item => {
  item.addEventListener('click', () => {
    // Reset all items
    items.forEach(i => i.style.backgroundColor = '');
    // Set background color of clicked item
    item.style.backgroundColor = 'lightblue';
  });
});
console.log("hello");