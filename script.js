// Blog Posts with Categories
const blogPosts = [
  {
    id: 1,
    title: " My First Blog Post",
    category: "General",
    body: "This is my first blog post loaded from a local JSON array."
  },
  {
    id: 2,
    title: " Learning JavaScript",
    category: "JavaScript",
    body: "JavaScript allows you to build dynamic websites, apps, and APIs."
  },
  {
    id: 3,
    title: " Why CSS Matters",
    category: "CSS",
    body: "CSS makes your websites beautiful. Flexbox and Grid are powerful."
  },
  {
    id: 4,
    title: " Portfolio Project Ideas",
    category: "Projects",
    body: "Build Todo, Expense Tracker, Blog Website, Quiz App, and more."
  },
  {
    id: 5,
    title: " Mastering HTML Basics",
    category: "HTML",
    body: "HTML is the structure of the web. Every website starts with HTML."
  }
];

let currentCategory = "All";

/* Load Category Buttons */
function loadCategories() {
  const categoryDiv = document.getElementById("categoryButtons");

  // Get Unique Categories
  let categories = ["All", ...new Set(blogPosts.map(p => p.category))];

  categories.forEach(cat => {
    let btn = document.createElement("button");
    btn.textContent = cat;

    btn.onclick = () => {
      currentCategory = cat;
      loadPosts();
    };

    categoryDiv.appendChild(btn);
  });
}

/* Load Posts */
function loadPosts() {
  const postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "";

  // Filter Posts
  let filteredPosts =
    currentCategory === "All"
      ? blogPosts
      : blogPosts.filter(post => post.category === currentCategory);

  filteredPosts.forEach(post => {
    const card = document.createElement("div");
    card.classList.add("post");

    card.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body.substring(0, 70)}...</p>
      <span class="tag">${post.category}</span>
    `;

    card.onclick = () => openPost(post);

    postsDiv.appendChild(card);
  });
}

/* Open Post Modal */
function openPost(post) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").textContent = post.title;
  document.getElementById("modalBody").textContent = post.body;
  document.getElementById("modalCategory").textContent =
    "Category: " + post.category;
}

/* Close Modal */
function closePost() {
  document.getElementById("modal").style.display = "none";
}

/* Start */
loadCategories();
loadPosts();
