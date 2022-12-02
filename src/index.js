const app = require('./app');

app.listen(app.get("port"), () => {
    console.log(`Puerto ejecutandose en el servidor http://localhost:${app.get("port")}`)
})