let itemValue = "";
document.getElementById("list").addEventListener("click", function (e) {
  itemValue = e.target.value;
});

function handleSubmit() {
  if (itemValue) {
    const pills = document.getElementById("pills");
    const ratingSection = document.getElementById("rating-section");
    const appreciationSection = document.getElementById("apperciation-section");
    pills.innerText = `You selected ${itemValue} out of 5`;
    ratingSection.style.display = "none";
    appreciationSection.style.display = "grid";
  }
}
