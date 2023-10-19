const User = require("../models/User")

const getUser = async (req, res) => {
    try {

        const users = await User.find()

        res.status(200).json({
            success: true,
            msg: "Data Found!",
            data: users
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}

const getSigleUser = async (req, res) => {
    try {
        const users = await User.findById(req.params.userId)

        if (!users) {
            return res.status(404).json({
                success: false,
                msg: "User Not Found"
            })
        }

        res.status(200).json({
            success: true,
            msg: "Data Found!",
            data: users
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}

const addUser = async (req, res) => {
    try {

        const { fullname, email, password } = req.body

        const users = await User.create({
            fullname,
            email,
            password
        })

        res.status(200).json({
            success: true,
            msg: "Data Found!",
            data: users
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}

const userUpdate = async (req, res) => {
    try {
        const { fullname, email, password } = req.body

        const users = await User.findById(req.params.userId);

        if (fullname) {
            users.fullname = fullname
        }
        if (email) {
            users.email = email
        }
        if (password) {
            users.password = password
        }

        const updatedUser = await users.save()

        res.status(200).json({
            success: true,
            msg: "Data Found!",
            data: updatedUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const users = await User.findByIdAndDelete(req.params.userId)

        res.status(200).json({
            success: true,
            msg: "Data Found!",
            data: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        })
    }
}



module.exports = { getSigleUser, getUser, userUpdate, deleteUser, addUser }