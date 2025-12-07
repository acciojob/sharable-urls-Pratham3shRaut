const button = document.getElementById("button");
const urlHeading = document.getElementById("url");

button.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();

  let base = "https://localhost:8080/";
  let query = [];

  if (name) query.push(`name=${encodeURIComponent(name)}`);
  if (year) query.push(`year=${encodeURIComponent(year)}`);

  if (query.length > 0) {
    base += "?" + query.join("&");
  }

  urlHeading.textContent = base;
});
