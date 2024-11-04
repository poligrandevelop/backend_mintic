const Producto = require('../models/Productos');

// Función para agregar productos
exports.addProd = async (req, res) => {
    try {
        let productos;
        productos = new Producto(req.body);
        await productos.save();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al agregar un Productos');
    }
};

// Función para buscar productos
exports.getProduc = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al traer los productos');
    }
};

// Función para buscar productos por id
exports.getAProduc = async (req, res) => {
    try {
        let productos = await Producto.findById(req.params.id)
        if (!productos) {
            res.status(404).send({ msg: " id no existe" })
        } else {
            res.json(productos);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al traer el Productos');
    }
};
// update Produc patch

exports.updateProduc = async (req, res) => {
    try {
        const productos = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });// _id
        if (!productos) {
            res.status(400).send({ msg: "Productos no encontrado con ese ID" })
        } else {
            res.json(productos);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al modificar el registro');
    }

};
// update Produc put
exports.updateProducPut = async (req, res) => {
    try {
        const productos = await Producto.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (!productos) {
            res.status(400).send({ msg: "Productos no encontrado con ese ID" })
        } else {
            res.json(productos);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al modificar un Productos');
    }

}

// delete Produc put

exports.deleteProduc = async(req,res) => {
    try {
        const productos = await Producto.findById(req.params.id);
        if (!productos) {
            res.status(404).send({msg:"No se encuentra en ID"});

        } else {
            await Producto.findOneAndDelete({_id:req.params.id});
            res.json({msg:'Se ha eliminado el registro'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al modificar un Producto');
    }
}