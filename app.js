const express = require("express");
const router = express.Router();
const nodeHtmlToImage = require("node-html-to-image");

// router.get(`/api/tweet/render`, async function (req, res) {
//   const image = await nodeHtmlToImage({
//     html:
//       "<html><body><div>Check out what I just did! #cool</div></body></html>",
//   });
//   res.writeHead(200, { "Content-Type": "image/png" });
//   res.end(image, "binary");
// });

// const image =
//   "https://raw.githubusercontent.com/aldrinjenson/wardrobe-ar/master/assets/avatar.png";
// const base64Image = new Buffer.from(image).toString("base64");
// const dataURI = "data:image/jpeg;base64," + base64Image;

nodeHtmlToImage({
  output: "./image.png",
  html:
    '<html><body><img src="{{avatar}}" /><img src="{{top}}" /><img src="{{bottom}}" /></body></html>',
  content: {
    avatar:
      "https://raw.githubusercontent.com/aldrinjenson/wardrobe-ar/master/assets/avatar.png",
    top:
      "https://raw.githubusercontent.com/aldrinjenson/wardrobe-ar/master/assets/shirt.png",
    bottom:
      "https://raw.githubusercontent.com/aldrinjenson/wardrobe-ar/master/assets/pants.png",
  },
});
