const Cliente = require('../models/Cientes.js');

// Función para agregar clientes
exports.addClient = async (req, res) => {
    try {
        let clientes;
        clientes = new Cliente(req.body);
        await clientes.save();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al agregar un cliente');
    }
};

// Función para buscar clientes
exports.getCli = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al traer los clientes');
    }
};

// Función para buscar clientes por id
exports.getACli = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id)
        if (!clientes) {
            res.status(404).send({ msg: " id no existe" })
        } else {
            res.json(clientes);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al traer el cliente');
    }
};
// update cli patch

exports.updateCli = async (req, res) => {
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });// _id
        if (!clientes) {
            res.status(400).send({ msg: "Cliente no encontrado con ese ID" })
        } else {
            res.json(clientes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al modificar un cliente');
    }

};
// update cli put
exports.updateCliPut = async (req, res) => {
    try {
        const clientes = await Cliente.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (!clientes) {
            res.status(400).send({ msg: "Cliente no encontrado con ese ID" })
        } else {
            res.json(clientes);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al modificar un cliente');
    }

}

// delete cli put

exports.deleteCli = async(req,res) => {
    try {
        const clientes = await Cliente.findById(req.params.id);
        if (!clientes) {
            res.status(404).send({msg:"No se encuentra en ID"});

        } else {
            await Cliente.findOneAndDelete({_id:req.params.id});
            res.json({msg:'Se ha eliminado el registro'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al modificar un cliente');
    }
}