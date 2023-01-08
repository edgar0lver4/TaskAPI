const yup = require('yup');
//Validación de datos para la creación

const createSchema = yup.object({
    body: yup.object({
        title: yup.string().min(4,'El titulo debe ser más descriptivo').required('El titulo es requerido'),
        description: yup.string().min(10, 'La descripción debe ser más larga').required('La descripción es requerida')
    })
})

module.exports = createSchema;