const Clientes = require('../models/clientes')

exports.get = async (req, res) => {

    try {
        const clientes = await Clientes.find()
        res.json(clientes)
    } catch (error) {
        res.json(error)
    }

}

exports.getId = async (req, res) => {

    try {
        const clientes = await Clientes.findById(id)
        res.json(clientes)
    } catch (error) {
        res.json(error)
    }

}

exports.add = async (req, res) => {

    try {
        const { Tipo, Nombre, Apellido, Edad, Sexo, Correo, Telefono, Direccion } = req.body
        console.log(Nombre)

        if (Tipo && Nombre && Apellido && Edad && Sexo && Correo && Telefono && Direccion) {

            const nuevoCliente = new Clientes({ Tipo, Nombre, Apellido, Edad, Sexo, Correo, Telefono, Direccion })
            await nuevoCliente.save()

            res.json({ mensaje: "Cliente registrado exitosamente", id: nuevoCliente._id })
        } else {
            res.json({ mensaje: "Por favor relleno todos los campos" })
        }
    } catch (error) {
        res.json(error)
    }

}

exports.edit = async (req, res) => {

    try {
        const idClientes = req.params.idClientes
        const datos = req.body

        if (idClientes && datos) {
            await Clientes.findByIdAndUpdate(idClientes, datos)
            res.json("Cliente actualizado correctamente")
        } else {
            res.json({ mensaje: "Por favor relleno todos los campos" })
        }

    } catch (error) {
        res.json(error)
    }

}

exports.delete = async (req, res) => {

    try {
        const idClientes = req.params.idClientes

        console.log(idClientes)
        const drop = await Clientes.findByIdAndUpdate(idClientes, { _id })

        res.status(200).json({ mensaje: "Cliente eliminado correctamente" })
    } catch (error) {
        res.status(500).json(error)

    }

}