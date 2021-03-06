const fonts = [];

async function getFontDataAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

getFontDataAsync("./src/data/fonts.json").then(function (data) {
  $(data.fonts).each(function (index, value) {
    if (value.isProject === false) {
      buildBlogPosts(value);
    }
  });
  $(data.fonts).each(function (index, value) {
    let fontTemp = {
      name: value.name,
      slug: value.slug,
      text: value.text,
      isProject: value.isProject,
      fontIndex: value.fontIndex,
      tags: value.tags,
      date: value.date,
    };
    fonts.push(fontTemp);
  });
});

/*
$(data.fonts).each(function (index, value) {
      if (value.isProject === false) {
        buildBlogPanel(value);
      }
    }); 





function getData() {
  const fonts = [];
  $.ajax({
    url: "./src/data/fonts.json",
    dataType: "json",
    type: "get",

    cache: false,
    success: function (data) {
      $(data.fonts).each(function (index, value) {
        let fontTemp = {
          name: value.name,
          slug: value.slug,
          text: value.text,
          isProject: value.isProject,
          fontIndex: value.fontIndex,
          tags: value.tags,
          date: value.date,
        };

        fonts.push(fontTemp);
      });
    },
  }).done(function () {
    return fonts;
  });
}

async function getDataAsync() {
  const fonts = await getData();
  console.log(fonts);
}

getDataAsync(); */
/* async function initFontData() {
  const fonts = [];
  await $.ajax({
    url: "./src/data/fonts.json",
    dataType: "json",
    type: "get",

    cache: false,
    success: async function (data) {
      $(data.fonts).each(async function (index, value) {
        let fontTemp = {
          name: value.name,
          slug: value.slug,
          text: value.text,
          isProject: value.isProject,
          fontIndex: value.fontIndex,
          tags: value.tags,
          date: value.date,
        };

        fonts.push(fontTemp);
      });
    },
  });
  return fonts;
}

var temp = initFontData();

console.log(temp);

function sortFonts() {
  fonts.sort((a, b) => parseFloat(a.fontIndex) - parseFloat(b.fontIndex));
}

function setUpPage() {} */

/*
$.ajax({
  url: "./src/data/fonts.json",
  dataType: "json",
  type: "get",
  cache: false,
  success: function (data) {
    data.fonts.sort(
      (a, b) => parseFloat(a.fontIndex) - parseFloat(b.fontIndex)
    );

     $(data.fonts).each(function (index, value) {
      if (value.isProject === false) {
        buildBlogPanel(value);
      }
    }); 
  },
});*/

function buildBlogPosts(data) {
  /* Erstellt die Font Posts */

  const aWrapper = document.createElement("a");
  aWrapper.classList.add("fp-blogpost");
  aWrapper.href = "fonts/" + data.slug + ".html";

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("fp-blogpost-thumbnail");

  const image = document.createElement("img");
  image.src = "img/font_thumbnails/" + data.slug + ".svg";
  image.classList.add("fp-blog-img");
  image.alt = data.name;

  imageWrapper.append(image);
  aWrapper.append(imageWrapper);

  const ulWrapper = document.createElement("div");
  ulWrapper.classList.add("fp-blog-info");

  const infoWrapper = document.createElement("ul");
  /* infoWrapper.classList.add("footer-ul"); */

  const itemWrapper = document.createElement("li");

  const itemLink = document.createElement("a");
  itemLink.classList.add("dotted-container");

  const span1 = document.createElement("span");
  const span1Info = (document.createTextNode = data.fontIndex);
  span1.append(span1Info);

  const span2 = document.createElement("span");
  const span2Info = (document.createTextNode = data.name);
  span2.append(span2Info);

  itemLink.append(span2);
  itemLink.append(span1);

  itemWrapper.append(itemLink);
  infoWrapper.append(itemWrapper);
  ulWrapper.append(infoWrapper);

  aWrapper.append(ulWrapper);

  $("#fp-blogpost-container").append(aWrapper);
}

document
  .getElementById("homepage-cover")
  .addEventListener("mousemove", function (e) {
    var weight =
      (800 / document.getElementById("homepage-cover").offsetWidth) * e.x + 100;
    var width =
      "'wdth' " +
      ((55 / document.getElementById("homepage-cover").offsetHeight) * e.y +
        70);
    $("#homepage-var-font").css("font-weight", weight);
    $("#homepage-var-font").css("font-variation-settings", width);
  });

shuffleMedia();

function shuffleMedia() {
  const videoSource = document.createElement("source");
  videoSource.type = "video/mp4";

  var i = Math.floor(Math.random() * (4 - 1 + 1) + 1);

  console.log(i);

  switch (i) {
    case 1:
      videoSource.src = "src/videos/bg_1.mp4";
      break;
    case 2:
      videoSource.src = "src/videos/bg_2.mp4";
      break;
    case 3:
      videoSource.src = "src/videos/bg_3.mp4";
      break;
    case 4:
      videoSource.src = "src/videos/bg_4.mp4";
      break;
    default:
      videoSource.src = "src/videos/bg_1.mp4";
      break;
  }

  $("#homepage-video").append(videoSource);
}
