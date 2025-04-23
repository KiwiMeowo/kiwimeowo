/*
        
        FILL IN THESE VARIABLES BASED ON THE GUIDE AT https://drawbox.nekoweb.org
        
        IF YOU HAVE ANY QUESTION, SUGGESTIONS, OR NEED HELP, PLEASE EMAIL ME AT drawbox@jhorn.net OR @MONKEYBATION on DISCORD
        
				      /`·.¸
				     /¸...¸`:·
				 ¸.·´  ¸   `·.¸.·´)
				: © ):´;      ¸  {
				 `·.¸ `·  ¸.·´\`·¸)
				     `\\´´\¸.·´
                     
*/
const GOOGLE_FORM_ID = "1FAIpQLSfPu4g7oXeVvwPLdzLtm0rQ7Kj1-3HtB5319l1TFa9sBIN2Lw";
const ENTRY_ID = "entry.912999888";
const GOOGLE_SHEET_ID = "1_tWK48W5A6pyRInHC-ksJnf12AoB-Ag4RlVldaNQdqk";
const DISPLAY_IMAGES = true;

/*
        
        DONT EDIT BELOW THIS POINT IF YOU DONT KNOW WHAT YOU ARE DOING.
        
*/

const CLIENT_ID = "b4fb95e0edc434c";
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/" + GOOGLE_SHEET_ID + "/export?format=csv";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/" + GOOGLE_FORM_ID + "/formResponse";

let canvas = document.getElementById("drawboxcanvas");
let context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

let restore_array = [];
let start_index = -1;
let stroke_color = "black";
let stroke_width = "2";
let is_drawing = false;

function change_color(element) {
  stroke_color = element.style.background;
}

function start(event) {
  is_drawing = true;
  context.beginPath();
  context.moveTo(getX(event), getY(event));
  event.preventDefault();
}

function draw(event) {
  if (!is_drawing) return;
  context.lineTo(getX(event), getY(event));
  context.strokeStyle = stroke_color;
  context.lineWidth = stroke_width;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.stroke();
  event.preventDefault();
}

function stop(event) {
  if (!is_drawing) return;
  context.stroke();
  context.closePath();
  is_drawing = false;
  restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
  start_index++;
  event.preventDefault();
}

function getX(event) {
  return event.pageX
    ? event.pageX - canvas.offsetLeft
    : event.targetTouches[0].pageX - canvas.offsetLeft;
}

function getY(event) {
  return event.pageY
    ? event.pageY - canvas.offsetTop
    : event.targetTouches[0].pageY - canvas.offsetTop;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function Restore() {
  if (start_index <= 0) {
    Clear();
  } else {
    start_index--;
    restore_array.pop();
    context.putImageData(restore_array[start_index], 0, 0);
  }
}

function Clear() {
  context.fillStyle = "white";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(0, 0, canvas.width, canvas.height);
  restore_array = [];
  start_index = -1;
}

context.drawImage = function() {
	console.warn("noo >:(");
};

document.getElementById("submit").addEventListener("click", async function () {
  const submitButton = document.getElementById("submit");
  const statusText = document.getElementById("status");

  submitButton.disabled = true;
  statusText.textContent = "Uploading...";

  const imageData = canvas.toDataURL("image/png");
  const blob = await (await fetch(imageData)).blob();
  const formData = new FormData();
  formData.append("image", blob, "drawing.png");

  try {
    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: { Authorization: `Client-ID ${CLIENT_ID}` },
      body: formData,
    });

    const data = await response.json();
    if (!data.success) throw new Error("Imgur upload failed");

    const imageUrl = data.data.link;
    console.log("Uploaded image URL:", imageUrl);

    const googleFormData = new FormData();
    googleFormData.append(ENTRY_ID, imageUrl);

    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      body: googleFormData,
      mode: "no-cors",
    });

    statusText.textContent = "Upload successful!";
    alert("Image uploaded and submitted successfully ☻");
    location.reload();
  } catch (error) {
    console.error(error);
    statusText.textContent = "Error uploading image.";
    alert("Error uploading image or submitting to Google Form.");
  } finally {
    submitButton.disabled = false;
  }
});

async function fetchImages() {
  if (!DISPLAY_IMAGES) {
    console.log("Image display is disabled.");
    return;
  }

  try {
    const response = await fetch(GOOGLE_SHEET_URL);
    const csvText = await response.text();
    const rows = csvText.split("\n").slice(1);

    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    rows.reverse().forEach((row) => {
      const columns = row.split(",");
      if (columns.length < 2) return;

      const timestamp = columns[0].trim();
      const imgUrl = columns[1].trim().replace(/"/g, "");

      if (imgUrl.startsWith("http")) {
        const div = document.createElement("div");
        div.classList.add("image-container");

        div.innerHTML = `
                    <img src="${imgUrl}" alt="drawing">
                    <p>${timestamp}</p>
                `;
        gallery.appendChild(div);
      }
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    document.getElementById("gallery").textContent = "Failed to load images.";
  }
}

fetchImages();
