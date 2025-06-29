
// Route for user login
const loginUser = async (req,res)=>{

}



// Route for user register
const registerUser = async (req,res) =>{
    console.log("register api hit")
 res.json({msg:"api is working"})
}

// Route for admin login
const adminLogin = async (req,res) =>{


}

export {
    loginUser,
    registerUser,
    adminLogin
}