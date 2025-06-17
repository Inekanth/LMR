const jwt = require ("jsonwebtoken");

const authendicateToken = (req, res, next) => {
    const authHeader = req.headers ["autherization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null){
        return res.status (401).json({message: "Authondication token require"});

    }

    jwt.verify(token, "Bookstore123", (err, user) => {
        if (err) {
            return res.status(403).json({messgae: "Token is expired. please SignIn again."})
        }
        req.user = user;
        next();
    }) 
}

module.exports = {authendicateToken};