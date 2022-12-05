const Ventas = require('../models/ventas')

exports.get = async (req, res) => {

    try {
        const ventas = await Ventas.find()
        res.json(ventas)
    } catch (error) {
        res.json(error)
    }

}

exports.getId = async (req, res) => {

    try {
        const id = req.params.id
        const ventas = await Ventas.findById(id)
        res.json(ventas)
    } catch (error) {
        res.json(error)
    }

}

exports.add = async (req, res) => {

    try {
        const { _idCelular, _idCliente, Fecha, Detalle, Precio } = req.body
        console.log(_idCelular)

        if (_idCelular && _idCliente && Fecha && Detalle && Precio) {

            const nuevaVenta = new Ventas({ _idCelular, _idCliente, Fecha, Detalle, Precio })
            await nuevaVenta.save()

            res.json({ mensaje: "Venta registrado exitosamente", id: nuevaVenta.id })
        } else {
            res.json({ mensaje: "Por favor relleno todos los campos" })
        }
    } catch (error) {
        res.json(error)
    }

}

exports.edit = async (req, res) => {

    try {
        const idVentas = req.params.idVentas
        const datos = req.body

        if (idVentas && datos) {
            await Ventas.findByIdAndUpdate(idVentas, datos)
            res.json("Venta actualizada correctamente")
        } else {
            res.json({ mensaje: "Por favor relleno todos los campos" })
        }

    } catch (error) {
        res.json(error)
    }

}