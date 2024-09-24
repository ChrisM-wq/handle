exports.isLoggedIn = (req, res, next) => {
    console.log(req.user);
    req.user ? next() : res.status(401).json({
        'status': 'Unauthorized',
        'message': 'User has been logged out.'
    })
};