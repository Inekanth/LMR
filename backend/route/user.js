const router = require ("express").Router();
const User = require ("../Models/user")

router.post("/sign-up", async (req,res)=>{
    try{
        const {username,email,password,address} = req.body;

        if (username < 4){
            return res
            .status(400)
            .json({message: "Username length should be grater than 3"})
        }

    const existingUsername = await User.find({username: username});
    if (existingUsername){
        return res
            .status(400)
            .json({message: "Username is already exist"})
    }

    const existingEmail = await User.find({email: email});
    if (existingEmail){
        return res
            .status(400)
            .json({message: "Email is already exist"})
    }

    if (password <= 6){
        return res
            .status(400)
            .json({message: "Password length should be grater than 6"})
    }

    const newUser = new User ({
        username: username,
        email: email,
        password: password,
        address: address,
    });
    
    await newUser.save();
    return res.status(500).json({message: "SignUp successfully"});
    


    } catch (error) {
        res.status(500).json({message: "internal server error"})
        
    }
})

module.exports = router;