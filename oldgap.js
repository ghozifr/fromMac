
const gapOld = (gap) => {
    return (gap * 1) + 12;
}

const oldInput = process.argv[2] // read from the terminal 3rd
const distance = gapOld(oldInput)

console.log(`If you are ${oldInput} years old then your brother is ${distance} years old.`)
