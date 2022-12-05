const Celulares = require('../models/celulares')

exports.get = async (req, res) => {

    try {
        const celulares = await Celulares.find()
        res.json(celulares)
    } catch (error) {
        res.json(error)
    }

}

exports.getId = async (req, res) => {

    try {
        const id = req.params.id
        const celulares = await Celulares.findById(id)
        res.json(celulares)
    } catch (error) {
        res.json(error)
    }

}

exports.add = async (req, res) => {

    try {
        const { Nombre, Marca, Modelo, Memoria, Almacenamiento, Red } = req.body
        console.log(Nombre)

        if (Nombre && Marca && Modelo && Memoria && Almacenamiento && Red) {

            const nuevoCelular = new Celulares({ Nombre, Marca, Modelo, Memoria, Almacenamiento, Red })
            await nuevoCelular.save()

            res.json({ mensaje: "Celular registrado exitosamente", id: nuevoCelular.id })
        } else {
            res.json({ mensaje: "Por favor relleno todos los campos" })
        }
    } catch (error) {
        res.json(error)
    }

}

exports.edit = async (req, res) => {

    try {
        const idCelulares = req.params.idCelulares
        const datos = req.body

        if (idCelulares && datos) {
            await Celulares.findByIdAndUpdate(idCelulares, datos)
            res.json("Celular actualizado correctamente")
        } else {
            res.json({ mensaje: "Por favor relleno todos los campos" })
        }

    } catch (error) {
        res.json(error)
    }

}