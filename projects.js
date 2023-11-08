function Project(link, image, title, description) {
  this.link = link;
  this.image = image;
  this.title = title;
  this.description = description;
}

const projects = [
  new Project(
    "https://example.com/project1",
    "./landing.png",
    "Landing Page",
    "Website landing page showcasing HTML and CSS abilities"
  ),
  new Project(
    "https://github.com/pthesken/rockpaperscissors",
    "./rps.png",
    "Rock Paper Scissors",
    "Javascript-based rock, paper, scissors game"
  ),

  new Project(
    "https://github.com/pthesken/etchASketch",
    "./etchasketch.png",
    "Etchasketch",
    "Javascript-based Etchasketch board"
  ),

  new Project(
    "https://github.com/pthesken/calculatorfinal",
    "./calculator.png",
    "Calculator",
    "Javascript-based calculator capable of adding, subtracting, multiplying, dividing"
  ),

  new Project(
    "https://github.com/pthesken/signUpForm",
    "./Signup-form.png",
    "Signup Form",
    "Website signup form capable of verifying matching password"
  ),

  new Project(
    "https://github.com/dev-island/cohort2-groupc",
    "todo.png",
    "Todo List",
    "Javascript-based checklist app"
  ),
];

export default projects;
