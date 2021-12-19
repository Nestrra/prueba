const app = require('./app.js')
const sequelize = require('./db')

sequelize.sync({ force: true }).then(() => {
    app.listen(3000, () => {

    })
})
