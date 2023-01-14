const yup = require('yup');

const deleteSchema = yup.object({
    body: yup.object({
        taskToken: yup.string().required('tasktoken is required')
    }),
    query: yup.object({
        id: yup.string().required('El id de la tarea es requerido')
    })
});

module.exports = deleteSchema;