// Create and send token  and save in the cookie


const sendToken = (user, statusCode, res , message ) => {
    // Create jwt token
    const token = user.getJwtToken();
  
    res.status(statusCode).json({
         success: true, 
         token ,
         user,
         message : message       
      });
  };
  module.exports= sendToken;