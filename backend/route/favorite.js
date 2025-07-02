const router = require("express").Router();
const User = require ("../Models/user");
const {authenticateToken} = require ("./userAuth");


//add to favorites
router.put("/add-to-favorite-book", authenticateToken, async (req, res) => {
    try {

        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isBookFavorite = userData.favorites.includes(id);

        if (isBookFavorite){
            res.status(200).json({message: "Book is already in favorite"})
        }

        await User.findByIdAndUpdate(id, {$push: {favorites: bookid}})
        res.status(200).json({message: "Book is added favorite"})
        
        
    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }
})

//remove from favorites
router.put("/remove-book-from-favorite", authenticateToken, async (req, res) => {
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isBookFavorite = userData.favorites.includes(id);

        if (isBookFavorite){
            await User.findByIdAndUpdate(id, {$pull: {favorites: bookid}})
        }
        res.status(200).json({message: "Book is removed favorite"})
        
    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }
})

//get the favorites
router.get("/get-to-favorite-book", authenticateToken, async (req, res) => {
    try {

        const { id } = req.headers;
        const userData = await User.findById(id).populate("favorites");
        const favoriteBooks = userData.favorites;

        return res.json ({status: "success", message: favoriteBooks})

    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }
})


module.exports = router;