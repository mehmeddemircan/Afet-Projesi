const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const sendToken = require('../utils/sendToken');
const crypto = require('crypto');

exports.register = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
  
    const _user = await User.findOne({ email });
  
    if (_user) {
      res.status(400).json({
        success: false,
        error: "This email already taken Try again please ! ",
      });
    }
  
    const user = await User.create({
      name,
      email,
      password,
    });
  
    sendToken(user, 201, res,"Successfully created account ");
  })

exports.login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    // Checks if email and password is entered by user
    if (!email || !password) {
      res.status(400).json({
        success: false,
        error: "Please provide an email and password",
      });
    }
  
    // Finding user in database
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      res.status(400).json({
        success: false,
        error: "Invalid email or password",
      });
    }
  
    // Check if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      res.status(400).json({
        success: false,
        error: "Invalid password",
      });
    }
  
    sendToken(user, 201, res, "Successfully logged in the account");
  })

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {

    const {email} = req.body 
  
    try {
        const user = await User.findOne({email})
  
        if (!user) {
          res.status(404).json({
            success: false ,
            error : 'Email could not found . Try again please'
          })
        }
        const resetToken = user.getResetPasswordToken()
  
        await user.save()
  
        const resetUrl = `http://localhost:4000/password/reset/${resetToken}`
  
        const message = `
          <h1>Sifre yenilemek için istek attınız </h1>
          <p>Merhaba ${user.email}</p>
          <p>Sifrenizi yenilemek için alttaki linke tıklayınız lütfen</p>
          
          <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
          `
  
          try {
            
            await sendEmail({
              to : user.email,
              subject : "Password Reset Request",
              text: message
            })
            res.status(200).json({
              success: true ,
              message : `Succesfully Email sent to ${user.email}`,
            })
          } catch (error) {
            user.resetPasswordToken = undefined
            user.resetPasswordExpire = undefined 
  
            await user.save()
  
            res.status(500).json({
              error : 'Email could not be send'
            })
  
          }
  
    } catch (error) {
        next(error)
    }
  
  })


  exports.resetPassword = catchAsyncErrors(async (req, res, next) => {

    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex")
  
    try {
      const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()}
      })
  
      if(!user){
        res.status(400).json({
          success: false,
          error : 'Invalid reset token'
        })
  
      }
  
      if (req.body.password !== req.body.confirmPassword) {
       res.status(400).json({
         success: false,
         error : 'Password does not match'
       })
    }
  
      user.password = req.body.password
      user.resetPasswordToken=undefined
      user.resetPasswordExpire=undefined
  
      await user.save()
  
      res.status(201).json({
        success:true,
        message:"Password Reset Success"
      })
  
    } catch (error) {
      next(error)
    }
  })