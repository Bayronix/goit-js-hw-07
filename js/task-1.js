const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Total number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoriesListh2 = item.querySelector("h2").textContent;
  const categorSumOfLiItems = item.querySelectorAll("ul > li");
  console.log(`Categories: ${categoriesListh2}`);
  console.log(`Elements: ${categorSumOfLiItems.length}`);
});
