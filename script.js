function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function previewLogo() {
  var fileInput = document.getElementById("logo-input");
  var preview = document.getElementById("preview");

  // Clear previous preview
  preview.innerHTML = "";

  // Check if a file is selected
  if (fileInput.files.length > 0) {
    var file = fileInput.files[0];

    // Check if file is an image
    if (file.type.match("image.*")) {
      var reader = new FileReader();

      reader.onload = function (e) {
        // Create image element and set source
        var img = document.createElement("img");
        img.src = e.target.result;

        // Append image to preview
        preview.appendChild(img);
      };

      // Read file as data URL
      reader.readAsDataURL(file);
    } else {
      preview.innerHTML = "Selected file is not an image.";
    }
  }
}
