const router = require ("express").Router();
const User = require ("../Models/user")
const bcrypt = require ("bcryptjs")
const jwt = require ("jsonwebtoken")
const {authendicateToken} = require ("./userAuth")
const order = require ("../Models/order")

router.post("/place-order", authendicateToken, async (req,res) => {
    try {
        const {id} = req.headers;
        const {order} = req.body;

        for (const orderData of order){
            const newOrder = new order ({ user: id, book: orderData._id});
            const orderDataFrom = await newOrder.save();

            await User.findByIdAndUpadate (id, {$push: {cart: orderData._id}, });

            return res.json ({status: "Succes", message: "Order Successfully placed"});
        }
        
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "internal server error"})
    }
})


router.get("/get-order-history", authendicateToken, async (req,res) => {
    try {
        const {id} = req.headers;
        const usetData = await User.findById(id).populate({
            path: "orders",
            populate: {path: "book"}
        })

        const ordersData = userData.orders.reverse();
        return res.json ({
            status: "Success",
            data: ordersData,
        })
        
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "internal server error"})
    }
})


router.get("/get-all-order", authendicateToken, async (req,res) => {
    try {
        
        const usetData = await order.find()
            .populate({
                path: "book",
            })
            .populate({
                path: "user",
            })
            .sort({
                createAt: 1,
            })

        return res.json ({
            status: "Success",
            data: userData,
        })
        
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "internal server error"})
    }
})


router.get("/upadate-status/:id", authendicateToken, async (req,res) => {
    try {
        const {id} = req.params;
        await order.findByIdAndupadate(id, {status: req.body.status})

        return res.json ({
            status: "Success",
            message: "Order status updated",
        })
        
    } catch (error) {
        console.log (error);
        res.status(500).json({message: "internal server error"})
    }
})


module.exports = router;
