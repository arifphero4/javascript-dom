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

const blogs = document.getElementsByClassName("blog");
for (const blog of blogs) {
  blog.style.border = "2px solid orange";
  blog.style.borderRadius = "15px";
  blog.style.margin = "10px";
  blog.style.padding = "15px";
}

// querySelector/ querySelectorAll
const querySelector = document.querySelectorAll("#second-title");
console.log("this is second title");
