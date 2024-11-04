const Tecnicos = require('../models/Tecnicos.js');

// Función para agregar tecnicos
exports.addTecnico = async (req, res) => {
    try {
        let tecnicos;
        tecnicos = new Tecnicos(req.body);
        await tecnicos.save();
        res.json(tecnicos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al agregar un Tecnico');
    }
};

// Función para buscar tecnicos
exports.getTec = async (req, res) => {
    try {
        const tecnicos = await Tecnicos.find();
        res.json(tecnicos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al traer los tecnicos');
    }
};

// Función para buscar tecnicos por id
exports.getATec = async (req, res) => {
    try {
        let tecnicos = await Tecnicos.findById(req.params.id)
        if (!tecnicos) {
            res.status(404).send({ msg: " id no existe" })
        } else {
            res.json(tecnicos);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al traer el Tecnicos');
    }
};
// update Tec patch

exports.updateTec = async (req, res) => {
    try {
        const tecnicos = await Tecnicos.findByIdAndUpdate(req.params.id, req.body, { new: true });// _id
        if (!tecnicos) {
            res.status(400).send({ msg: "Tecnicos no encontrado con ese ID" })
        } else {
            res.json(tecnicos);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al modificar un Tecnicos');
    }

};
// update Tec put
exports.updateTecPut = async (req, res) => {
    try {
        const tecnicos = await Tecnicos.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (!tecnicos) {
            res.status(400).send({ msg: "Tecnicos no encontrado con ese ID" })
        } else {
            res.json(tecnicos);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al modificar un Tecnicos');
    }

}

// delete Tec put

exports.deleteTec = async(req,res) => {
    try {
        const tecnicos = await Tecnicos.findById(req.params.id);
        if (!tecnicos) {
            res.status(404).send({msg:"No se encuentra en ID"});

        } else {
            await Tecnicos.findOneAndDelete({_id:req.params.id});
            res.json({msg:'Se ha eliminado el registro'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al modificar un Tecnicos');
    }
}