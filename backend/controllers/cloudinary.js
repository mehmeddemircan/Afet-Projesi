const cloudinary = require("cloudinary");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.upload = catchAsyncErrors(async (req, res, next) => {
  let result = await cloudinary.uploader.upload(
    req.body.image,

    {
      public_id: `${Date.now()}`,
      resource_type: "auto",
    }
  );

  res.status(200).json({
    public_id: result.public_id,
    url: result.secure_url,
  });
});

exports.remove = (req, res, next) => {
  let image_id = req.body.public_id;

  cloudinary.uploader.destroy(image_id, (err, result) => {
    if (err) {
      return res.json({
        success: false,
        err,
      });
    }
    res.send("ok");
  });
};


exports.uploadProductPicture = catchAsyncErrors(async(req,res,next)=> {
    console.log('hello');
    let result = await cloudinary.uploader.upload(req.body.image,{
        public_id: `${Date.now()}`,
        resource_type :  "auto"
    })
    console.log('hello');
    res.status(200).json({
        public_id : result.public_id,
        url : result.secure_url
    })

    console.log('hello');
})
