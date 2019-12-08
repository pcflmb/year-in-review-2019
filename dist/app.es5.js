// POLYFILLS
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position){
    return this.substr(position || 0, searchString.length) === searchString;
  };
}

// Collection details are generated here ---------------------------------------------------
function buildAllCollections() {
  var photoCollections = [];
  function addPhotoCollection(photoCollection) {
    photoCollections.push(photoCollection);
  }

  // 1 - New Zealand
  addPhotoCollection(buildPhotoCollection('New Zealand', [
    buildPhotoWithDescription('1nz/BNL_0172.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0167.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0176.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0197.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0214.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0222.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0235.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0241.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0250.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0262.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0263.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0277.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0284.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0292.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0328.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0354.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0359.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0404.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0416.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0443.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0456.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0466.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0475.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0476.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0498.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0518.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0536.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0543.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0557.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0565.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0567.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0572.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0590.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0592.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0594.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0604.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0621.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0625.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0626.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0630.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0640.JPG', ''),
    buildPhotoWithDescription('1nz/BNL_0684.JPG', ''),
    buildPhotoWithDescription('1nz/bounce.jpg', ''),
    buildPhotoWithDescription('1nz/fall.jpg', ''),
    buildPhotoWithDescription('1nz/jump.jpg', ''),
    buildPhotoWithDescription('1nz/PC230026.JPG', ''),
    buildPhotoWithDescription('1nz/zBWR_08.jpg', ''),
    buildPhotoWithDescription('1nz/zLab_08.jpg', ''),
  ]), 'Jan 2019');

  // 2 - Lauren Bday
  addPhotoCollection(buildPhotoCollection('Lauren\'s Birthday Party', [
    buildPhotoWithDescription('2bday/IMG_0004.JPG', ''),
    buildPhotoWithDescription('2bday/IMG_0012.JPG', ''),
    buildPhotoWithDescription('2bday/IMG_0044.JPG', ''),
    buildPhotoWithDescription('2bday/IMG_3988.png', ''),
    buildPhotoWithDescription('2bday/IMG_3994.png', ''),
    buildPhotoWithDescription('2bday/IMG_4038.JPG', ''),
    buildPhotoWithDescription('2bday/IMG_4039.JPG', ''),
    buildPhotoWithDescription('2bday/IMG_4485.png', ''),
  ]), 'Jan 2019');

  // 3 - Ski
  addPhotoCollection(buildPhotoCollection('Ski Trip with Friends', [
    buildPhotoWithDescription('3ski/IMG_4594.png', ''),
    buildPhotoWithDescription('3ski/IMG_4589.png', ''),
    buildPhotoWithDescription('3ski/IMG_4590.png', ''),
    buildPhotoWithDescription('3ski/IMG_4628.png', ''),
    buildPhotoWithDescription('3ski/IMG_4633.JPEG', ''),
    buildPhotoWithDescription('3ski/IMG_6734.png', ''),
    buildPhotoWithDescription('3ski/IMG_6736.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_6740.jpg', ''),
    buildPhotoWithDescription('3ski/IMG_6749.png', ''),
    buildPhotoWithDescription('3ski/IMG_6751.png', ''),
    buildPhotoWithDescription('3ski/IMG_6790.png', ''),
    buildPhotoWithDescription('3ski/IMG_6843.png', ''),
    buildPhotoWithDescription('3ski/IMG_6852.png', ''),
    buildPhotoWithDescription('3ski/IMG_6858.png', ''),
    buildPhotoWithDescription('3ski/IMG_6866.png', ''),
    buildPhotoWithDescription('3ski/IMG_7011.png', ''),
    buildPhotoWithDescription('3ski/IMG_7024.png', ''),
  ]), 'Feb 2019');

  // 4 - Ski pt 2
  addPhotoCollection(buildPhotoCollection('Ski Daytrip', [
    buildPhotoWithDescription('4ski2/IMG_4950.JPEG', ''),
    buildPhotoWithDescription('4ski2/IMG_4927.png', ''),
    buildPhotoWithDescription('4ski2/IMG_4931.png', ''),
    buildPhotoWithDescription('4ski2/IMG_4936.JPEG', ''),
    buildPhotoWithDescription('4ski2/IMG_4943.png', ''),
    buildPhotoWithDescription('4ski2/IMG_4956.png', ''),
    buildPhotoWithDescription('4ski2/IMG_4966.png', ''),
    buildPhotoWithDescription('4ski2/IMG_4979.JPEG', ''),
    buildPhotoWithDescription('4ski2/IMG_4980.JPEG', ''),
  ]), 'Mar 2019');

  // 3? - Sonoma
  addPhotoCollection(buildPhotoCollection('Sonoma Wine Tasting', [
    buildPhotoWithDescription('3sonoma/IMG_4336.png', ''),
    buildPhotoWithDescription('3sonoma/IMG_4326.JPEG', ''),
    buildPhotoWithDescription('3sonoma/IMG_4332.png', ''),
    buildPhotoWithDescription('3sonoma/IMG_4333.JPEG', ''),
    buildPhotoWithDescription('3sonoma/IMG_4340.png', ''),
  ]), 'Apr 2019');

  // 5 - Disney
  addPhotoCollection(buildPhotoCollection('Disney!', [
    buildPhotoWithDescription('5disney/IMG_5083.JPG', ''),
    buildPhotoWithDescription('5disney/IMG_5091.JPG', ''),
    buildPhotoWithDescription('5disney/IMG_5096.png', ''),
    buildPhotoWithDescription('5disney/IMG_5119.png', ''),
    buildPhotoWithDescription('5disney/IMG_5166.JPG', ''),
    buildPhotoWithDescription('5disney/IMG_5168.JPG', ''),
    buildPhotoWithDescription('5disney/IMG_5169.png', ''),
  ]), 'Jan 2019');

  // 6 - 
  addPhotoCollection(buildPhotoCollection('San Diego', [
    buildPhotoWithDescription('6sandiego/IMG_5195.JPEG', ''),
    buildPhotoWithDescription('6sandiego/57627851882__3664561C-0190-47E3-9E55-AE2730291022.JPG', ''),
    buildPhotoWithDescription('6sandiego/IMG_5189.png', ''),
  ]), 'Jan 2019');

  // 7 - 
  addPhotoCollection(buildPhotoCollection('Wine Pairing Party', [
    buildPhotoWithDescription('7wine/IMG_5399.png', ''),
    buildPhotoWithDescription('7wine/IMG_0002.JPG', ''),
    buildPhotoWithDescription('7wine/IMG_0011.JPG', ''),
    buildPhotoWithDescription('7wine/IMG_0019.JPG', ''),
    buildPhotoWithDescription('7wine/IMG_0024.JPG', ''),
    buildPhotoWithDescription('7wine/IMG_0044.JPG', ''),
    buildPhotoWithDescription('7wine/IMG_5395.png', ''),
    buildPhotoWithDescription('7wine/IMG_5403.JPEG', ''),
    buildPhotoWithDescription('7wine/IMG_5406.png', ''),
    buildPhotoWithDescription('7wine/IMG_5408.png', ''),
  ]), 'Jan 2019');

  // 8 - 
  addPhotoCollection(buildPhotoCollection('Vanuatu', [
    buildPhotoWithDescription('8vanuatu/IMG_5546.png', ''),
    buildPhotoWithDescription('8vanuatu/BNL_0191.JPG', ''),
    buildPhotoWithDescription('8vanuatu/BNL_0197.JPG', ''),
    buildPhotoWithDescription('8vanuatu/BNL_0289.JPG', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5535.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5541.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5550.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5552.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5554.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5555.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5556.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5558.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5560.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5561.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5563.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5566.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5575.JPEG', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5576.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5581.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5590.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5592.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5597.JPEG', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5604.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5605.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5617.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5624.JPEG', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5634.png', ''),
    buildPhotoWithDescription('8vanuatu/IMG_5649.png', ''),
  ]), 'May 2019');

  // 9 - 
  addPhotoCollection(buildPhotoCollection('Fiji', [
    buildPhotoWithDescription('9fiji/IMG_5704.png', ''),
    buildPhotoWithDescription('9fiji/BNL_0357.JPG', ''),
    buildPhotoWithDescription('9fiji/bnl_0364.JPEG', ''),
    buildPhotoWithDescription('9fiji/BNL_0371.JPG', ''),
    buildPhotoWithDescription('9fiji/bnl_0435.jpg', ''),
    buildPhotoWithDescription('9fiji/BNL_0706.JPG', ''),
    buildPhotoWithDescription('9fiji/BNL_0716.JPG', ''),
    buildPhotoWithDescription('9fiji/BNL_0724.JPG', ''),
    buildPhotoWithDescription('9fiji/BNL_0798.JPG', ''),
    buildPhotoWithDescription('9fiji/bnl_0878.jpg', ''),
    buildPhotoWithDescription('9fiji/IMG_5715.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5722.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5729.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5730.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5739.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5746.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5749.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5754.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5761.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5764.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5769.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5773.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5774.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5784.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5785.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5787.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5789.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5794.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5795.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5800.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5802.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5820.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5826.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5828.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5837.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5846.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5853.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5872.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5874.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5892.png', ''),
    buildPhotoWithDescription('9fiji/IMG_5917.JPEG', ''),
    buildPhotoWithDescription('9fiji/IMG_5947.png', ''),
    buildPhotoWithDescription('9fiji/IMG_6003.png', ''),
    buildPhotoWithDescription('9fiji/IMG_6008.png', ''),
  ]), 'May 2019');

  return photoCollections;
}
// End of collection details  ----------------------------------------------------------------

function buildPhotoWithDescription(photoUrl, description) {
  return {
    url: './img/' + photoUrl,
    description: description,
  };
}

function buildPhotoCollection(title, photosWithDescriptions, subtitle) {
  return {
    title: title,
    subtitle: subtitle,
    photos: photosWithDescriptions,
  };
}


function titleToClassName(title) {
  title = title.toLowerCase();
  // replace consecutive non-alphanumeric with a single dash
  return title.replace(/[^a-z0-9]+/g, '-');
}

function genFirstImage(photos) {
  var firstPhoto = photos[0];
  var i = document.createElement('img');
  i.src = firstPhoto.url;
  i.onload = resizeAllGridItems;
  return i;
}

function genCollectionDescription(photoCollection) {
  var description = document.createElement('div');
  description.classList.add('collection-description');
  var title = document.createElement('span');
  title.innerText = photoCollection.title;
  title.classList.add('collection-description--title');
  description.appendChild(title);
  if (photoCollection.subtitle) {
    var subtitle = document.createElement('span');
    subtitle.innerText = photoCollection.subtitle;
    subtitle.classList.add('collection-description--subtitle');
    description.appendChild(subtitle);
  }
  return description;
}

function genLightboxLinks(photos, collectionClassName) {
  // generate links for every photo
  var lightboxLinks = document.createElement('div');
  lightboxLinks.classList.add('lightbox-links')
  for (var i = 0; i < photos.length; i++) {
    var photo = photos[i];
    // create link to image
    var imgLink = document.createElement('a');
    imgLink.href = photo.url;
    imgLink.classList.add(collectionClassName);
    if (photo.description) {
      imgLink.title = photo.description;
    }
    // // add image inside of link
    // var img = document.createElement('img');
    // img.src = photo.url;
    // imgLink.appendChild(img);

    // add link to list of links
    lightboxLinks.appendChild(imgLink);
  }
  return lightboxLinks;
}

function attachLightboxListener(container, collectionClassName) {
  var gallery = halkaBox.run(collectionClassName, {});
  container.addEventListener('click', function(e) {
    // open the first image
    gallery.open(0);
  });
}

function genCollectionElements(photoCollection) {
  var collectionClassName = titleToClassName(photoCollection.title);
  // create container
  var container = document.createElement('div');
  container.classList.add('collection');
  // cover photo for the collection is the first image
  container.appendChild(genFirstImage(photoCollection.photos));
  // add title and subtitle
  container.appendChild(genCollectionDescription(photoCollection));
  // create links for lightbox to work
  container.appendChild(genLightboxLinks(photoCollection.photos, collectionClassName));
  return container;
}

function genCollectionElementsAndAppend(photoCollection, appendTo) {
  // a collection must have photos
  if (!photoCollection.photos.length) {
    return;
  }
  var collectionClassName = titleToClassName(photoCollection.title);
  var container = genCollectionElements(photoCollection);
  appendTo.appendChild(container);
  // attach listner for lightbox
  // NOTE: must be done _after_ the <a> img links are inserted into the DOM
  attachLightboxListener(container, collectionClassName);
}

function renderPhotoCollections(appDiv, photoCollections) {
  // add all photo collections to the DOM in order
  for (var i = 0; i < photoCollections.length; i++) {
    genCollectionElementsAndAppend(photoCollections[i], appDiv);
  }
}

function resizeGridItem(item, rowHeight, rowGap) {
  // get height of all children
  var height = 0;
  var children = item.children;
  for (var i = 0; i < children.length; i++) {
    var child = children.item(i);
    height = height + child.getBoundingClientRect().height;
  }
  var itemStyles = window.getComputedStyle(item, null);
  var paddingTop = parseInt(itemStyles.getPropertyValue('padding-top').match(/\d+/)[0], 10);
  var paddingBottom = parseInt(itemStyles.getPropertyValue('padding-bottom').match(/\d+/)[0], 10);
  height = height + paddingTop + paddingBottom;
  // calculate the number of grid spans to fit the div
  var rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  var grid = document.querySelector(".grid");
  var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  var allCollections = document.getElementsByClassName("collection");
  for (var i = 0; i < allCollections.length; i++) {
    resizeGridItem(allCollections[i], rowHeight, rowGap);
  }
}

function setupMasonry() {
  // run resize once, then listen for future browser resize events
  resizeAllGridItems();
  window.addEventListener("resize", resizeAllGridItems);
}

function main() {
  // Remove "no-js" class from <html> tag
  document.body.parentNode.className = '';

  var collectionsDiv = document.getElementById("photo-collections")

  // setup lightbox options
  halkaBox.options({
    animation: "slide",      // animation type on next/prev ("slide" || "fade")
    theme: "dark",          // lightbox overlay theme ("light" || "dark")
    preload: 3,              // number of images to preload
    isZoomable: true         // ability to zoom image (true || false)
  });

  // setup UI
  renderPhotoCollections(collectionsDiv, buildAllCollections());

  // setup Masonry Grid
  setupMasonry();
}

document.addEventListener("DOMContentLoaded", main);

