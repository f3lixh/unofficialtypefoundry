const fonts = [];

async function getFontDataAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

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
});

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

/* <article class="fonts-listitem">
<div class="fonts-li-metadata">
    <h3>New Austin</h3>
    <div class="fonts-slider-container">
        <label for="newaustin-slider">Size </label>
        <input name="newaustin-slider" class="fonts-slider fonts-slider-size" type="range" min="16"
            max="160" value="100" />
    </div>
    <div class="fonts-slider-container">
        <label for="newaustin-slider">Spacing </label>
        <input name="newaustin-slider" class="fonts-slider fonts-slider-tracking" step="1" type="range"
            min="-10" max="80" value="0" />
    </div>
    <div class="fonts-slider-container">
        <input type="button" class="fonts-property-btn" onclick="toggleUppercase(this)" value="TT" />
    </div>
</div>

<div class="fonts-li-tester fonts-active-otf typeface-newaustin" spellcheck="false"
    contenteditable="true">
    New Austin is a typeface from the old west. Based on UI elements
    from Red Dead Redemption II.
</div>

<div class="fonts-feature-buttons">
    <div class="fonts-feature-toggle non-select" onclick="showFontFeatures(this)">
        OpenType Features
    </div>
    <a class="fonts-feature-readmore non-select" href="font/newaustin.html">
        Read More
    </a>
</div>
<div class="fonts-feature-container">
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="liga" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="calt" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="salt" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="ss01" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="ss02" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="ss03" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="ss04" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="ss05" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="ss06" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="ss07" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="ss08" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="frac" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="sups" />
    <input type="button" onclick="toggleFontFeature(this)" class="fonts-feature-btn" value="sinf" />
</div>
</article>
 */
