console.log("hello world");

const blogTitles = document.getElementsByTagName("h4");
for (const h4 of blogTitles) {
  console.log(h4);
}
const blogDetails = document.getElementsByTagName("p");
for (const p of blogDetails) {
  console.log(p);
}

const getId = document.getElementById("second-title");
getId.style.color = "green";
getId.style.fontSize = "30px";

const thirdTitle = document.getElementById("third-title");
thirdTitle.style.color = "red";
