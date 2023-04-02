window.onload = (ev) => {
  const data = getData();
  render();
};

function render() {
  const imageTitle = document.getElementById("image-title");
  imageTitle.innerHTML = data.name;

  const imageSubTitle = document.getElementById("image-subtitle");
  imageSubTitle.innerHTML = data.rol;

  const storyDescription = document.getElementById("story-description");
  storyDescription.innerHTML = data.story;

  const projectsDescription = document.getElementById("project-description");
  projectsDescription.innerHTML = data.projectsDescription;

  data.exercises.forEach((ex) => {
    createExerciseCard(ex);
  });
}

function createExerciseCard(exercise) {
  const title = createExerciseTitle(exercise);

  const img = createExerciseImage(exercise);

  const description = createExerciseDescription(exercise);

  const divLinks = createExerciseLinks(exercise);

  const card = document.createElement("div");
  card.setAttribute("class", "exercise-card");
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(divLinks);

  const exerciseContainer = document.getElementById("exercises-container");
  exerciseContainer.appendChild(card);
}

function createExerciseTitle(exercise) {
  const title = document.createElement("h2");
  title.setAttribute("class", "exercise-title");
  title.innerHTML = exercise.title;
  return title;
}

function createExerciseImage(exercise) {
  const img = document.createElement("img");
  img.setAttribute("class", "exercise-image");
  img.setAttribute("src", exercise.image);
  return img;
}

function createExerciseDescription(exercise) {
  const description = document.createElement("p");
  description.innerHTML = exercise.description;
  return description;
}

function createExerciseLinks(exercise) {
  const divLinks = document.createElement("div");
  if (exercise.link != "") {
    const link = document.createElement("a");
    link.setAttribute("href", exercise.link);
    link.setAttribute("class", "exercise-link");
    link.innerHTML = "Watch";
    divLinks.appendChild(link);
  }

  const repository = document.createElement("a");
  repository.setAttribute("href", exercise.repository);
  repository.setAttribute("class", "exercise-link");
  repository.innerHTML = "Repo";
  divLinks.appendChild(repository);

  return divLinks;
}
