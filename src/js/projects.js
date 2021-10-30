const projectsImgCount = 10;
const fonts = [];
var colorIndex = 0;

shuffleMedia();

async function getFontDataAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

getFontDataAsync("./src/data/fonts.json").then(function (data) {
  /* $(data.fonts).each(function (index, value) {
    if (value.isProject === false) {
      buildProjectPosts(value);
    }
  }); */
  $(data.fonts).each(function (index, value) {
    let fontTemp = {
      name: value.name,
      slug: value.slug,
      text: value.text,
      isProject: value.isProject,
      fontIndex: value.fontIndex,
      isVariable: value.isVariable,
      tags: value.tags,
      styles: value.styles,
      glyphsCount: value.glyphsCount,
      date: value.date,
    };
    fonts.push(fontTemp);
  });
  buildProjectBlogs();
});

/* setInterval(shuffleMedia, 200); */

function shuffleMedia() {
  const imgSource = document.createElement("img");
  imgSource.alt = "Projects Header";

  var index = Math.floor(Math.random() * (projectsImgCount - 1 + 1) + 1);

  for (var i = 0; i < projectsImgCount; i++) {
    imgSource.src = "src/img/header/projects/projects_" + index + ".svg";
  }

  $(".projects-header").append(imgSource);
}

/* function buildProjectPosts(font) {
  const article = document.createElement("article");
  const projectBlog = document.createElement("div");
  projectBlog.classList.add("projects-blog");
  projectBlog.classList.add(getRandomColor());

  const projectImg = document.createElement("div");
  projectImg.classList.add("projects-blog-img");

  const projectImgSrc = document.createElement("img");
  projectImgSrc.classList.add("shadow");
  projectImgSrc.alt = font.name;
  projectImgSrc.src = "img/font_thumbnails/" + font.slug + ".svg";

  projectImg.append(projectImgSrc);

  projectBlog.append(projectImg);

  const projectBlogInfo = document.createElement("div");
  projectBlogInfo.classList.add("project-blog-info");

  const projectBlogInfoPanel = document.createElement("div");
  projectBlogInfoPanel.classList.add("shadow");
  projectBlogInfoPanel.classList.add("project-blog-info-panel");

  const projectBlogList = document.createElement("ul");

  const projectBlogListItem = document.createElement("li");

  projectBlogListItem.innerText = font.text;

  projectBlogList.append(projectBlogListItem);

  projectBlogInfoPanel.append(projectBlogList);

  projectBlogInfo.append(projectBlogInfoPanel);
  projectBlog.append(projectBlogInfo);

  article.append(projectBlog);
  $(".projects").append(article);
}
 */
function getRandomColor() {
  const colors = [
    "bg-blue",
    "bg-green",
    "bg-red",
    "bg-yellow",
    "bg-pink",
    "bg-cyan",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function buildProjectBlogs() {
  var nextSeparator = false;
  fonts.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  fonts.forEach((font) => {
    const article = document.createElement("article");
    const projectBlogImg = document.createElement("div");

    projectBlogImg.classList.add("projects-blog-img");
    const img = document.createElement("img");
    img.src = "img/font_thumbnails/" + font.slug + ".svg";
    img.alt = font.name;

    const projectBlogInfo = document.createElement("div");
    projectBlogInfo.classList.add("projects-blog-info");

    const paragraph = document.createElement("p");
    paragraph.innerText = font.text;

    const separator = document.createElement("a");
    separator.href = "www.google.de";
    separator.classList.add("project-separator");

    const h2 = document.createElement("span");
    const h22 = document.createElement("span");

    h2.innerText = "Greetings Im a Separator! Juhu";
    h22.innerText = "187";

    separator.append(h2, h22);

    determineColor(article, img, paragraph);

    const meta = document.createElement("div");
    meta.classList.add("projects-blog-meta", "non-select");
    /* meta.innerText =
      font.styles +
      (font.styles > 1 ? " Styles * " : " Style * ") +
      font.glyphsCount +
      " Glyphs * " +
      new Date(font.date).getFullYear() +
      " * FREE" +
      (font.isVariable ? " * Variable" : ""); */
    for (let i = 0; i < 5; i++) {
      const dottedContainer = document.createElement("div");
      const propertySpan = document.createElement("span");
      const valuespan = document.createElement("span");

      dottedContainer.classList.add("projects-blog-property", "text-blue");
      propertySpan.classList.add(getBackgroundColor());
      valuespan.classList.add(getBackgroundColor());

      switch (i) {
        case 0:
          propertySpan.innerText = "Release";
          valuespan.innerText =
            new Date(font.date).toLocaleString("default", {
              month: "long",
            }) +
            " " +
            new Date(font.date).getFullYear();

          break;
        case 1:
          propertySpan.innerText = "Glyphs";
          valuespan.innerText = font.glyphsCount;
          break;
        case 2:
          propertySpan.innerText = "License";
          valuespan.innerText = "FREE";
          break;
        case 3:
          propertySpan.innerText = "Styles";
          valuespan.innerText = font.styles;
          break;
        case 4:
          propertySpan.innerText = "Variable";
          valuespan.innerText = "Yes";
          break;
      }

      if (i == 4 && !font.isVariable) break;

      dottedContainer.append(propertySpan);
      dottedContainer.append(valuespan);
      meta.append(dottedContainer);
    }

    /*  projectBlogInfo.append(paragraph); */
    projectBlogImg.append(img);
    article.append(projectBlogImg);
    article.append(meta);
    /* article.append(projectBlogInfo); */
    $(".projects").append(article);

    if (colorIndex == 0) $(".projects").append(separator);
  });
}

function determineColor(article, img, paragraph) {
  switch (colorIndex) {
    case 0:
      article.classList.add("bg-red"); /* "bg-red" */

      img.classList.add("yellow");
      colorIndex++;
      break;
    case 1:
      article.classList.add("bg-green"); /* "bg-green" */

      img.classList.add("red");
      paragraph.classList.add("text-white");
      colorIndex++;
      break;
    case 2:
      article.classList.add("bg-yellow"); /* "bg-green" */

      img.classList.add("magenta");
      paragraph.classList.add("text-pink");
      colorIndex++;
      break;
    case 3:
      article.classList.add("bg-cyan"); /* "bg-cyan" */

      img.classList.add("blue");
      paragraph.classList.add("text-blue");
      colorIndex = 0;
      break;
  }
}

function getBackgroundColor() {
  switch (colorIndex - 1) {
    case 0:
      return "bg-red";
    case 1:
      return "bg-green";
    case 2:
      return "bg-yellow";
    case -1:
      return "bg-cyan";
  }
}
