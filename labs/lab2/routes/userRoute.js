const userController = require('./../controllers/userController');

const userRouter = require('express').Router();

const HttpError = require('./../httpError');

userRouter
    /**
     * @route GET /api/users/{id}
     * @group Users - user operations
     * @param {integer} id.path.required - id of the User
     * @returns {User.model} 200 - User object
     * @returns {Error} 400 - Bad request
     * @returns {Error} 404 - User not found
    */
    .get('/', userController.getUsers)
    /**
     * @route GET /api/users
     * @group Users - user operations
     * @param {integer} page.query - page of the users list (page size is 8, default = 1)
     * @returns {Array.<User>} 200 - Users page
     * @returns {Error} 400 - Bad request
     */
    .get('/:id', userController.getUser);

userRouter.use((req, res) => {
    throw new HttpError(400, 'command not found');
});

module.exports = userRouter;