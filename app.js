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

// querySelector/ querySelectorAll
const querySelector = document.querySelector("#second-title");
querySelector.style.color = "blue";
console.log("this is second title");

// append child
const article = document.createElement("article");
article.classList.add("blog");
const h4 = document.createElement("h4");
h4.innerText = "my blog-5";
const p = document.createElement("p");
p.innerText =
  "my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. my name is khan. ";
article.appendChild(h4);
article.appendChild(p);

// parent of child
const blogSection = document.getElementById("blogs");
blogSection.appendChild(article);
console.log(article);

// style at blog
const blogs = document.getElementsByClassName("blog");
for (const blog of blogs) {
  blog.style.border = "2px solid orange";
  blog.style.borderRadius = "15px";
  blog.style.margin = "10px";
  blog.style.padding = "15px";
}

// creting my blog -6
/* const article2 = document.createElement("article");
article2.classList = "blog";
const h4b = document.createElement("h4");
h4.innerText = "my blog -6";
const p2 = document.createElement("p");
p.innerText =
  "hello there, this is my blog - 6. hello there, this is my blog - 6. hello there, this is my blog - 6. hello there, this is my blog - 6. hello there, this is my blog - 6. hello there, this is my blog - 6. hello there, this is my blog - 6. hello there, this is my blog - 6. ";

article2.appendChild(h4b);
article2.appendChild(p2);

const newBlog = document.getElementById("blogs");
newBlog.appendChild(article2); */
