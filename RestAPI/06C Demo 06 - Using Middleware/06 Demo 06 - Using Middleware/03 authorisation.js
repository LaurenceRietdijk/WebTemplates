// Custom authorization middleware
const authorize = (requiredPermission) => {
    return (req, res, next) => {
      // Check if the user has the required permission
      if (userHasPermission(req.user, requiredPermission)) {
        next(); // User is authorized, proceed to the next middleware
      } else {
        res.status(403).json({ error: 'Access denied' }); // User does not have permission
      }
    };
  };
  
  // Protect routes with authorization middleware
  app.get('/admin', authorize('admin'), (req, res) => {
    res.send('You have admin access');
  });
  