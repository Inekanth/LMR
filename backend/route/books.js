const router = require ("express").Router();
const User = require ("../Models/user")
const bcrypt = require ("bcryptjs")
const jwt = require ("jsonwebtoken")


const {authendicateToken} = require ("./userAuth");
const book = require("../Models/book");

//books adding
router.post ("/add-book", authendicateToken, async (req, res)=>{
    try {

        const {id} = req.headers;
        const user = await User.findById(id);

        if (user.role !== "admin"){
            return res.status(400).json({message: "you haven't access"})
        }

        const book = new book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language,
        })

        await book.save();
        res.status(200).json({message: "added book"})

        
    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }
})

//books update
router.put ("/update-book", authendicateToken, async (req, res)=>{
    try {

        const {id} = req.headers;
        const user = await User.findByIdAndUpdate(bookid, {
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language,
        });
        return res.status(200).json({message: "updated book"})

        
    } catch (error) {
      
      return res.status(500).json({message: "error occured"})
    }
})

//books deleting
router.delete ("/delete-book", authendicateToken, async (req, res)=>{

    try {

        const {bookid} = req.headers;
        await User.findByIdAndDelete(bookid);
        return res.status(200).json({message: "Deleted book"})

        
    } catch (error) {
      return res.status(500).json({message: "error occured"})
    }
})

//all books showing
router.get ("/get-all-book", authendicateToken, async (req, res)=>{

    try {

        const book =  await book.find().sort({createdAt: 1})
        return res.json({status: "Sucess", data: book})

        
    } catch (error) {
      return res.status(500).json({message: "error occured"})
    }
})

//showing recently adding books
router.get ("/get-recent-book", authendicateToken, async (req, res)=>{

    try {

        const book =  await book.find().sort({createdAt: 1}).limit(5);
        return res.json({status: "Sucess", data: book})

        
    } catch (error) {
      return res.status(500).json({message: "error occured"})
    }
})

//books searching
router.get ("/get-book-by-id/:id", authendicateToken, async (req, res)=>{

    try {
        const { id } = req.params;
        const book = await book.findById(id);
        return res.json({status: "Sucess", data: book})

    } catch (error) {
      return res.status(500).json({message: "error occured"})
    }
})


module.exports = router;