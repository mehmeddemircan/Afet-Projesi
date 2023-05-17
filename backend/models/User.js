const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = mongoose.Schema;
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 30,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    role: {
      type: String,
      enum: ['user', 'admin'], 
      default: "user",
    },
  
    address: String,
    location: {
      lat: {
        type: String,
      
    
      },
      lng : {
        type : String
      }
    },
    tasks: [
      {
        type: ObjectId,
        ref: 'Task',
      },
    ],
    clothingForms : [{
      type : ObjectId ,
      ref : 'ClothingNeedForm'
    }],
    mealForms : [
      {
        type : ObjectId,
        ref : 'MealNeedForm'
      }
    ],
    shelterForms : [
      {
        type : ObjectId,
        ref : 'ShelterNeedForm'
      }
    ],
    clothingBasket : [
      {
        clothingProduct : {
          type : ObjectId ,
          ref : 'ClothesProduct'
        },
        quantity : {
          type : Number,
          default : 1
        }
      }
    ],
    shelterBasket : [
      {
        shelterProduct : {
          type : ObjectId,
          ref : 'ShelterProduct'
        },
        quantity : {
          type  : Number,
          default : 1
        }
      }
    ],
    mealBasket : [
      {
        mealProduct : {
          type : ObjectId,
          ref : 'MealProduct'
        },
        quantity : {
          type  : Number,
          default : 1
        }
      }
    ],
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

// Encrypting password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Return JWT token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() +   30 * 60 * 1000; // 30 min

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);