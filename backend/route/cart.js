const router = require ("express").Router();
const User = require ("../Models/user");
const {authendicateToken} = require ("./userAuth");


router.put ("/add-to-card", authendicateToken, async (req, res)=> {

    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isBookinCart = userData.cart.include(bookid);

        if (isBookinCart){
            return res.json ({status: "succes", message: "book is already addded"})
        }

        await User.findByIdAndUpadate(id, {
            $push: {cart: bookid},
        })

        return res.json ({status: "succes", message: "Book added to card"})

    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }
})


router.put ("/remove-from-cart/:bookid", authendicateToken, async (req, res) => {
    try {
        const { bookid } = req.params;
        const { id } = req.headers;
        await User.findByIdAndUpadate(id, 
            {$pull: 
                {favorites: bookid}
            }
        );
       
        return  res.json ({status: "Succes", message: "Book is removed favorite"})
        
    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }
})


router.get ("/get-to-favorite-book", authendicateToken, async (req, res) => {
    try {

        const { id } = req.headers;
        const userData = await User.findById(id).populate("cart");
        const cart = userData.reverse();

        return res.json ({status: "succes", data: cart})

    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }
})


module.exports = router;
