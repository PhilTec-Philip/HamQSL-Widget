// Solar Terrestrial Data Widget

let imgUrl = "https://www.hamqsl.com/solar101vhf.php";
let req = new Request(imgUrl);
let img = await req.loadImage();

let widget = new ListWidget();
widget.backgroundColor = new Color("#000");

let image = widget.addImage(img);
image.centerAlignImage();
image.applyFillingContentMode();

image.imageSize = new Size(img.size.width * 0.7, img.size.height * 0.7);

// widget.addSpacer(16);

// let title = widget.addText('"Hey Siri, Amateurfunkdaten"');
// title.textColor = Color.white();
// title.font = Font.blackSystemFont(8);
// title.centerAlignText();

// widget.url = "https://www.hamqsl.com/solar.html"
widget.url = "https://www.hamqsl.com/solar101vhf.php";

if (config.runsInWidget) {
  widget.refreshAfterDate = new Date(Date.now() + 1 * 60 * 60 * 1000);
  Script.setWidget(widget);
} else {
  widget.presentMedium();
}

Script.complete();