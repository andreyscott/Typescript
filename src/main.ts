interface User {
    name: string
    age: number
    value : boolean
    getMessage?(): string   | null  
}

const newUser : User = {
    name: 'monset',
    value: false,
    age: 69,
    null

}

console.log(newUser.name, " ",  newUser.value)