const { validationResult } = require("express-validator");
let {users} = require("./../Store/store");
let constant = require("../constants.json");

const createUser = (request, response) => {
    const errors = validationResult(request)

    if (errors.isEmpty()) {
        users = [...users, {id: (users[users.length - 1].id + 1), name: request.body.name, email: request.body.email, mobile: request.body.mobile}];
        console.log(users)
        return response.status(200).send({message: constant.success.userAdded})
    }
    response.status(422).json({errors: errors.array()})
}


const getAllUsers = (request, response) => {
    return response.status(200).send({message: constant.success.usersDataFetched, data: users})
}

const getUserByUserId = (request, response) => {
    let userIndex = (users.findIndex(e => e.id === request.query.userId))
    return response.status(200).send({message: (userIndex === -1) ? constant.error.userNotFound : constant.success.userDataFetched, data: (userIndex === -1) ? [] : users[userIndex]})
}

const updateUser = (request, response) => {
    if(!Object.keys(request.body).includes("id")) return response.status(400).send({message: constant.error.notSufficient});
    let userId = request.body.id;
    let userIndex = (users.findIndex(e => e.id === userId));
    if(userIndex !== -1) {
        let userData = users[userIndex];
        userData = {...userData, ...request.body}
        users.splice(userIndex, 1);
        users = [...users, userData];
        return response.status(200).send({message: constant.success.userUpdated, data: userData})
    
    } else {
        return response.status(200).send({message: constant.error.userNotFound, data: []})
    }
}

const deleteUser = (request, response) => {
    if(request.query.userId) {
        let userId = request.body.id;
        let userIndex = (users.findIndex(e => e.id === userId));
        users.splice(userIndex, 1);
        return response.status(200).send({message: constant.success.userDeleted})
    } else { 
        return response.status(400).send({message: constant.error.notSufficient}) 
    };
}





module.exports = {createUser, getAllUsers, getUserByUserId, updateUser, deleteUser}