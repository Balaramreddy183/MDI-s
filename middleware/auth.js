// middleware/auth.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log("authHeader::",authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null){
        //return res.sendStatus(401);
        return res.json({status:"0", message: 'Unauthorized: Missing token' });
    }else{
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            console.log("user::",user);
            if (err) {

            return res.json({status:"0", message: 'Unauthorized' });
            }else{
                req.userId = user['user_id'];
                next();
            }
            
        });

      //  next();
    }
//need to add here actual implementation of token
  /*  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });*/
}

module.exports = authenticateToken;
