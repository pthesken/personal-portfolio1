/*<div class="grid-item">
  <a href="https://example.com/project1">
    <div class="project-image">
      <img src="landing.png" alt="Image 1" />
    </div>
    <div class="project-text">
      <h1>Landing Page</h1>
      <p>Website landing page showcasing HTML and CSS abilities</p>
    </div>
  </a>
</div>;*/
const IMAGE_GRID = document.querySelector(".image-grid");

const GRID_ITEM = document.createElement("div");
const PROJECT_LINK = document.createElement("a");

const PROJECT_IMAGE_CONTAINER = document.createElement("div");
const PROJECT_IMAGE = document.createElement("img");

const PROJECT_TEXT_CONTAINER = document.createElement("div");
const PROJECT_HEADER = document.createElement("h1");
const PROJECT_TEXT = document.createElement("p");

GRID_ITEM.classList.add("grid-item");
PROJECT_IMAGE_CONTAINER.classList.add("project-image");
PROJECT_TEXT_CONTAINER.classList.add("project-text");

PROJECT_HEADER.textContent = "Generated Project";
PROJECT_TEXT.textContent = "dummy description";
PROJECT_IMAGE.src = "./calculator.png";
PROJECT_LINK.href = "https://example.com/project1";

PROJECT_IMAGE_CONTAINER.appendChild(PROJECT_IMAGE);
PROJECT_TEXT_CONTAINER.append(PROJECT_HEADER, PROJECT_TEXT);
PROJECT_LINK.append(PROJECT_IMAGE_CONTAINER, PROJECT_TEXT_CONTAINER);
GRID_ITEM.append(PROJECT_LINK);
IMAGE_GRID.append(GRID_ITEM);
