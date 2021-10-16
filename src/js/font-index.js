const fonts = [];

async function getFontDataAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

getFontDataAsync("./src/data/fonts.json").then(function (data) {
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

  buildFontIndex();
});

function buildFontIndex() {
  fonts.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1));
  var tempInitial;
  var balance = Math.round(fonts.length / 2);
  console.log(balance);

  fonts.forEach((font) => {
    if (tempInitial != font.name.charAt(0)) {
      /*  Creates the initial element */
      const initial = document.createElement("div");
      initial.classList.add("font-index-initial", "middle-text");
      initial.innerHTML = font.name.charAt(0).toUpperCase();

      if (balance <= 0) {
        $(".font-index-second").append(initial);
      } else {
        $(".font-index-first").append(initial);
      }
      tempInitial = font.name.charAt(0);
    }

    const fontItem = document.createElement("a");
    fontItem.href = "fonts/" + font.slug + ".html";
    fontItem.classList.add("font-index-item");

    const fontName = document.createElement("div");
    fontName.classList.add("font-index-name");
    fontName.innerHTML = font.name + (font.isProject ? " (Project)" : "");
    fontItem.append(fontName);

    const fontIndex = document.createElement("div");
    fontIndex.classList.add("font-index-index");
    fontIndex.innerHTML = font.fontIndex;
    fontItem.append(fontIndex);

    if (balance <= 0) {
      $(".font-index-second").append(fontItem);
    } else {
      $(".font-index-first").append(fontItem);
      balance--;
    }
  });
}
