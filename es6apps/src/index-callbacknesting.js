//callback nesting

const getUser = (resolve, reject) => {
    let user = {
        name: 'admin',
        password: 'admin'
    }
    //user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { message: 'User not found' })
    }
}

const login = (user, resolve, reject) => {
    //user = null
    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}

const showDashbaord = (status, resolve, reject) => {
    //user = null
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'Admin Page')
    } else {
        setTimeout(reject, 1000, 'Guest Page')
    }
}
getUser(user => {
    console.log(user)
    //call login 
    login(user, status => {
        console.log(status)
        showDashbaord(status, adminPage => {
            console.log(adminPage)
        }, guestPage => {
            console.log(guestPage)
        })
    }, err => console.log(err))
}, err => {
    console.log(err)
})