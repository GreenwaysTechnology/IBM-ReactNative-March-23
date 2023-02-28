//Promise With factory apis 

const login = (userName, password) => {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}

//what if i want to wrap existing callback apis into promises : explicit timer 

const auth = (userName, password) => {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')

        }
    })
}

function main() {
    login('admin', 'admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))
        
    auth('admin', 'admin')
        .then(status => console.log(status))
        .catch(err => console.log(err))
}
main()
