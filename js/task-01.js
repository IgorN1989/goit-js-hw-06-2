const categoriesRef = document.querySelector('ul#categories');

const numberOfCategories1 = categoriesRef.children.length;
console.log('Number of categories:', numberOfCategories1);

const numberOfCategories2 = categoriesRef.querySelectorAll('#categories .item').length;
console.log('Number of categories:', numberOfCategories2);


const infoOfCategories = categoriesRef.querySelectorAll('li.item').forEach(item => {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('li').length);
});
