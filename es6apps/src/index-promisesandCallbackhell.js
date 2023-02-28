//callback nesting

const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
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
    })
}

const login = user => {
    console.log('login is called')

    return new Promise((resolve, reject) => {
        //user = null
        if (user.name === 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}

const showDashbaord = status => {
    console.log('showDashbaord is called')

    return new Promise((resolve, reject) => {
        //user = null
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'Admin Page')
        } else {
            setTimeout(reject, 1000, 'Guest Page')
        }
    })
}

function main() {
    // getUser(user => {
    //     console.log(user)
    //     //call login 
    //     login(user, status => {
    //         console.log(status)
    //         showDashbaord(status, adminPage => {
    //             console.log(adminPage)
    //         }, guestPage => {
    //             console.log(guestPage)
    //         })
    //     }, err => console.log(err))
    // }, err => {
    //     console.log(err)
    // })

    // getUser()
    //     .then(user => {
    //         return login(user)
    //     })
    //     .then(status => {
    //         return showDashbaord(status)
    //     })
    //     .then(page => {
    //         console.log(page)
    //     })
    //     .catch(err => {

    //     })
    getUser()
        .then(user => login(user))
        .then(status => showDashbaord(status))
        .then(page => console.log(page))
        .catch(err => console.log(err))
}
main()