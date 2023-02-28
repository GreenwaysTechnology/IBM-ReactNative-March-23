//Promise with async functions

async function getValue() {
    //return Promise.resolve(10) // return Promise.resolve(10)
    return 10
}


async function main() {
    // console.log(getValue())
    //   getValue()
    //      .then(res=>console.log(res))

    try {
        const value = await getValue()
        console.log(value)
    }
    catch (err) {
        console.log(err)
    }
}
main()