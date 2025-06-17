const router = require ("express").Router();
const User = require ("../Models/user")
const bcrypt = require ("bcryptjs")
const jwt = require ("jsonwebtoken")
const {authendicateToken} = require ("./userAuth")

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

    const hashPass = await bcrypt.hash(password, 10);



    const newUser = new User ({
        username: username,
        email: email,
        password: hashPass,
        address: address,
    });
    
    await newUser.save();
    return res.status(500).json({message: "SignUp successfully"});
    


    } catch (error) {
        res.status(500).json({message: "internal server error"})
        
    }
})


//sign-in
router.post("/sign-in", async (req,res)=>{
    try{
        const {username, password} = req.body ;

        const existingUser = await User.findOne({username});
        if (!existingUser){
            res.status(400).json({message: "Invalid credintial"})
        }

        await bcrypt.compare(password, existingUser.password, (err, data) =>{
            if (data) {
                const authClaims = [{name: existingUser.username}, {role: existingUser.role}]

                const token = jwt.sign({authClaims}, "Bookstore123", {expiresIn: "30d"})

                res.status(200).json({id: existingUser._id , role: existingUser.role , token: token})

            } else{
                res.status(400).json({message: "Invalid credintial"})
            }
        } )

    } catch (error) {
        res.status(500).json({message: "internal server error"})
        
    }
})


// user info
router.get("/get-user-information", authendicateToken, async (req, res) => {
    try {
        const {id} = req.headers;
        const data = await User.findById(id).select ("-password"); //user password is hided
        res.status(500).json(data)
        
    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }
}) 


// Address updating
router.put ("/update-address", authendicateToken, async (req, res) => {
    try {
        const {id} = req.headers;
        const {address} = req.body;
        await User.findByIdAndUpdate(id, {address: address})
        res.status(500).json({message: "Address updated successfully"})

    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }
})


module.exports = router;