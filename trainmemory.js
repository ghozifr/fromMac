


const parah = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Yey done!"), 5000)
})

const asyncFunctio = async() => {
    const result = await parah


    console.log(result)
}

asyncFunctio()