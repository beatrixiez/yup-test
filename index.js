const yup = require('yup')

const valores = {
    nome: 'Beatriz',
    email: 'beatrizbarreto@gmail.com',
    idade: -19,
    website: 'https://beatrizbarreto.com'
}

let schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    idade: yup.number().required().integer().positive(),
    website: yup.string().url()
})

schema
.isValid(valores)
.then((valid) => {
    console.log('Valor válido:', valid) // returns false (idade = -19, not a positive number)
})