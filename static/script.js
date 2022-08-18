const mammaMiaButton = document.getElementById('menu-show-allergens');
const allergenContainerCheckboxes = document.getElementById('menu-allergen-container-checkboxes');
const allergenContainer = document.getElementById('menu-allergen-container');
const addToCartButton = document.querySelectorAll('.add-to-cart');

addToCartButton.forEach(cartButton => {
  cartButton.addEventListener('click', () => {
    alert('The selected pizza is added to your cart!');
  })
});


mammaMiaButton.addEventListener('click', showCheckboxes);

function showCheckboxes() {
  mammaMiaButton.style.display = 'none';
  allergenContainerCheckboxes.innerHTML = '';
  fetchMenuJson()
    .then(response => {
      response.forEach(allergen => {
        const newInput = document.createElement('input');
        const newLabel = document.createElement('label');
        allergenContainerCheckboxes.appendChild(newInput);
        allergenContainerCheckboxes.appendChild(newLabel);
        newInput.type = 'checkbox';
        newLabel.innerHTML = allergen.name;
        newInput.className = 'checkbox-class';
        newLabel.setAttribute('for', `${allergen.name}`);
      });
    })
  const newButton = document.createElement('button');
  allergenContainer.appendChild(newButton);
  newButton.id = 'hide-checkboxes-button'
  newButton.style.display = 'inline-block';
  newButton.innerHTML = "Mamma mia! I don't have any allergies! Click here to hide the allergen filter!";
  const hideButton = document.getElementById('hide-checkboxes-button');
  hideButton.addEventListener('click', () => {
    console.log('faszi');
    hideButton.style.display = 'none';
    allergenContainerCheckboxes.innerHTML = '';
    mammaMiaButton.style.display = 'inline-block';
  })
}

async function fetchMenuJson() {
  let response = await fetch('http://127.0.0.1:9001/api/allergens')
  return response.json();
}
