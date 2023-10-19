const { getSigleUser, getUser, userUpdate, deleteUser, addUser } = require('../core/user_controller')
const middleFun = require('../midd/middle')

const router = require('express').Router()



router.get('/info/:userId', getSigleUser)
router.get('/', getUser)
router.post('/', addUser)
router.put('/:userId', userUpdate)
router.delete('/:userId', deleteUser)

module.exports = router