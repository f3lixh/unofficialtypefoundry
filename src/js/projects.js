const projectsImgCount = 8;

shuffleMedia();
function shuffleMedia() {
  const imgSource = document.createElement("img");
  imgSource.alt = "Projects Header";
  /*  imgSource.classList.add("") */

  var index = Math.floor(Math.random() * (projectsImgCount - 1) + 1);

  for (var i = 0; i < projectsImgCount; i++) {
    imgSource.src = "src/img/header/projects/projects_" + index + ".svg";
  }

  $(".font-index-header").append(imgSource);
}
