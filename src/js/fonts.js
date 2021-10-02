const fonts = [];

getFontDataAsync("./src/data/fonts.json").then(function (data) {
  $(data.fonts).each(function (index, value) {
    if (value.isProject === false) {
      buildBlogPanel(value);
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
  changeFontSize();
  changeSpacing();
});

async function getFontDataAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function buildBlogPanel(data) {
  const fontWrapper = document.createElement("article");
  fontWrapper.classList.add("fonts-listitem");

  const fontMetadata = document.createElement("div");
  fontMetadata.classList.add("fonts-li-metadata");

  const fontNameHeader = document.createElement("h3");
  fontNameHeader.innerText = data.name;
  fontMetadata.append(fontNameHeader);

  const fontSlider = document.createElement("div");
  fontSlider.classList.add("fonts-slider-container");

  const fontSliderLabel = document.createElement("label");
  fontSliderLabel.htmlFor = data.slug + "-slider";
  fontSliderLabel.innerText = "Size ";
  fontSlider.append(fontSliderLabel);

  const fontSliderInput = document.createElement("input");
  fontSliderInput.name = data.slug + "-slider";
  fontSliderInput.id = data.slug + "-slider";
  fontSliderInput.type = "range";
  fontSliderInput.min = 16;
  fontSliderInput.max = 160;
  fontSliderInput.value = 100;
  fontSliderInput.setAttribute("onchange", "changeFontSize()");
  fontSliderInput.classList.add("fonts-slider");
  fontSliderInput.classList.add("fonts-slider-size");
  fontSlider.append(fontSliderInput);

  //

  const fontSlider2 = document.createElement("div");
  fontSlider2.classList.add("fonts-slider-container");

  const fontSliderLabel2 = document.createElement("label");
  fontSliderLabel2.htmlFor = data.slug + "-slider";
  fontSliderLabel2.innerText = "Spacing ";
  fontSlider2.append(fontSliderLabel2);

  const fontSliderInput2 = document.createElement("input");
  fontSliderInput2.name = data.slug + "-slider";
  fontSliderInput2.id = data.slug + "-slider";
  fontSliderInput2.type = "range";
  fontSliderInput2.min = -10;
  fontSliderInput2.max = 80;
  fontSliderInput2.value = 0;
  fontSliderInput2.step = 1;
  fontSliderInput2.setAttribute("onchange", "changeSpacing()");
  fontSliderInput2.classList.add("fonts-slider");
  fontSliderInput2.classList.add("fonts-slider-tracking");
  fontSlider2.append(fontSliderInput2);

  //

  //

  const fontSlider3 = document.createElement("div");
  fontSlider3.classList.add("fonts-slider-container");

  const fontSliderInput3 = document.createElement("input");
  fontSliderInput3.type = "button";
  fontSliderInput3.value = "TT";
  fontSliderInput3.setAttribute("onclick", "toggleUppercase(this)");
  fontSliderInput3.classList.add("fonts-property-btn");
  fontSlider3.append(fontSliderInput3);

  //

  fontMetadata.append(fontSlider);
  fontMetadata.append(fontSlider2);
  fontMetadata.append(fontSlider3);
  fontWrapper.append(fontMetadata);

  const fontText = document.createElement("div");
  fontText.classList.add("fonts-li-tester", "fonts-active-otf", data.slug);
  fontText.innerText = data.text;
  fontText.spellcheck = false;
  fontText.contentEditable = true;

  fontWrapper.append(fontText);

  //

  if (data.features.length > 0) {
    const fontSettings = document.createElement("div");
    fontSettings.classList.add("fonts-feature-buttons");

    const fontButtonLabel = document.createElement("div");
    fontButtonLabel.classList.add("fonts-feature-toggle", "non-select");
    fontButtonLabel.setAttribute("onclick", "showFontFeatures(this)");
    fontButtonLabel.innerText = "OpenType Features";
    fontSettings.append(fontButtonLabel);

    const fontPageRoute = document.createElement("a");
    fontPageRoute.classList.add("fonts-feature-readmore", "non-select");
    fontPageRoute.innerText = "Read More";
    fontPageRoute.href = "fonts/" + data.slug + ".html";
    fontSettings.append(fontPageRoute);

    fontWrapper.append(fontSettings);

    //

    const fontOTF = document.createElement("div");
    fontOTF.classList.add("fonts-feature-container");
    data.features.forEach((f) => {
      const tempInputButton = document.createElement("input");
      tempInputButton.type = "button";
      tempInputButton.setAttribute("onclick", "toggleFontFeature(this)");
      tempInputButton.classList.add("fonts-feature-btn");
      tempInputButton.value = f;
      fontOTF.append(tempInputButton);
    });

    fontWrapper.append(fontOTF);
  }

  $("#fonts-section").append(fontWrapper);
  ////////////////////////////////////////////////////////
  /* 
  aWrapper.classList.add("fp-blogpost");
  aWrapper.href = "fonts/" + data.slug + ".html";

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("fp-blogpost-thumbnail");

  const image = document.createElement("img");
  image.src = "img/font_thumbnails/" + data.slug + ".svg";
  image.classList.add("font-panel-img");
  image.alt = data.name;

  imageWrapper.append(image);
  aWrapper.append(imageWrapper);

  const ulWrapper = document.createElement("div");
  ulWrapper.classList.add("fp-blog-info");

  const infoWrapper = document.createElement("ul");
  infoWrapper.classList.add("footer-ul");

  const itemWrapper = document.createElement("li");

  const itemLink = document.createElement("a");

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

  $("#fp-blogpost-container").append(aWrapper); */
}

function changeFontSize() {
  $(".fonts-slider-size").each(function () {
    this.oninput = function () {
      $(this)
        .parents(".fonts-listitem")
        .find(".fonts-li-tester")
        .css("font-size", this.value + "px");
    };
  });
}

function changeSpacing() {
  $(".fonts-slider-tracking").each(function () {
    this.oninput = function () {
      $(this)
        .parents(".fonts-listitem")
        .find(".fonts-li-tester")
        .css("letter-spacing", this.value + "px");
    };
  });
}

function showFontFeatures(elmnt) {
  $(elmnt)
    .parents(".fonts-listitem")
    .find(".fonts-feature-container")
    .toggleClass("box");
  $(elmnt).toggleClass("fonts-arrow-down");
}

function toggleFontFeature(elmnt) {
  var f = $(elmnt)
    .parents(".fonts-listitem")
    .find(".fonts-active-otf")
    .css("font-feature-settings");
  /* console.log(f); */
  var store = [];
  var features = f.split(", ");
  features.forEach((element) => {
    if (element.length > 6) {
      //With Integer
      store.push(element);
    } else {
      element = element + " 1";
      store.push(element);
    }
  });

  var changeIndex = store.findIndex((element) => element.includes(elmnt.value));

  if (changeIndex == -1) {
    store.push('"' + elmnt.value + '" 1');
  } else {
    if (store[changeIndex].includes(" 0")) {
      store[changeIndex] = store[changeIndex].replace(" 0", " 1");
      $(elmnt).toggleClass("fonts-feature-active");
    } else {
      store[changeIndex] = store[changeIndex].replace(" 1", " 0");
      $(elmnt).toggleClass("fonts-feature-active");
    }
  }
  /* store.forEach(element => {
          console.log(element)
      }) */

  $(elmnt)
    .parents(".fonts-listitem")
    .find(".fonts-active-otf")
    .css("font-feature-settings", store.join(", "));
}

function toggleUppercase(elmnt) {
  $(elmnt)
    .parents(".fonts-listitem")
    .find(".fonts-li-tester")
    .toggleClass("uppercase");
}
