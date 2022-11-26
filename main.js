const imageUrls = [
  'http://bitly.ws/xanu',
  'https://thumbs.gfycat.com/UnfitPitifulHoatzin-size_restricted.gif',
  'https://i.pinimg.com/originals/f4/6a/8b/f46a8ba96b5d2a8c9072a41fe57f98a7.gif'
];
var $gallery = document.querySelector('main');
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', onClick);
function onClick() {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
}

function updateGallery() {
  $gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
