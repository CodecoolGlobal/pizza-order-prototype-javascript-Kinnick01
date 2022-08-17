document
.getElementById("menu-show-allergens")
.addEventListener("click", showAllergens() =>{
        
});


function showAllergens() {
    pizzasList.allergens.forEach(function(allergen) {
        <div>
          <label for="allergen.id">allergen.name</label>
        <input type="checkbox" id="allergen.id">
        </div>
      })
   }


console.log('hello')