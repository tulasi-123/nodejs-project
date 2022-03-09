const yup = require('yup');

module.exports = yup.object().shape({
    employeeName: yup.string().required(),
    designation: yup.string()
})