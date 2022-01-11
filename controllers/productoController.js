const Producto = require("../models/Producto");

exports.crearProducto = async (req, res)=> {
    try {
        let producto;

        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
        let producto = Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({msg: 'No existe el producto'});
        }
        producto = req.body;
        producto = await Producto.findByIdAndUpdate({_id: req.params.id}, producto, {new: true});
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({msg: 'No existe el producto'});
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.borrarProducto = async (req, res) => {
    try {
        let producto = await Producto.findByIdAndRemove(req.params.id);
        if (!producto) {
            res.status(404).json({msg: 'No existe el producto'});
        }
        res.json('Producto borrado');
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}