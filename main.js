import projects from "./projects.js";

function createProjectView(
  projectLink,
  projectImage,
  projectTitle,
  projectDescription
) {
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

  PROJECT_LINK.href = projectLink;
  PROJECT_LINK.target = "blank";
  PROJECT_IMAGE.src = projectImage;
  PROJECT_HEADER.textContent = projectTitle;
  PROJECT_TEXT.textContent = projectDescription;

  PROJECT_IMAGE_CONTAINER.appendChild(PROJECT_IMAGE);
  PROJECT_TEXT_CONTAINER.append(PROJECT_HEADER, PROJECT_TEXT);
  PROJECT_LINK.append(PROJECT_IMAGE_CONTAINER, PROJECT_TEXT_CONTAINER);
  GRID_ITEM.append(PROJECT_LINK);
  IMAGE_GRID.append(GRID_ITEM);
}

for (let project of projects) {
  createProjectView(
    project.link,
    project.image,
    project.title,
    project.description
  );
}
