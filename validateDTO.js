function validate(schema) {
    return async (req, res, next) => {
        try {
            await schema.validate(req.body)
            next();
        } catch (err) {
            res.status(400).send(err);
        }
    }
}

module.exports = validate;