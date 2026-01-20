
 // get data
    // validate
    // check if user already exist
    // create a user in database
    // create a verification token
    // save token in db
    // send token as email to user
    // send success status to user
const registerUser = async(req,res)=>{
 const {name,email,password}=req.body || {};
    if(!name ||!email || !password){
      return res.status(400).json({
        message:"All field are required"
      });
    }
}

export {registerUser};