const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.addUser = async (req, res) => {
    try {
        const { name, lastname, nickname, email, password, administracion, role } = req.body;

        // Validación de entrada
        if (!name || !lastname || !nickname || !email || !password) {
            return res.status(400).send('Todos los campos son obligatorios');
        }
        const existingUser = await User.findOne({ $or: [{ nickname }, { email }] });
        if (existingUser) return res.status(400).send('El nickname o el email ya están en uso');


        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({
            name,
            lastname,
            nickname,
            email,
            password: hashedPassword,
            administracion,
            role
        });
        if (!nickname || nickname.trim() === '') {
            return res.status(400).send('El nickname es obligatorio');
        }

        await user.save();
        res.status(201).send('Usuario registrado');
    } catch (error) {
        console.error('Error al registrar el usuario:', error.message || error); // Añade información detallada
        res.status(500).send('Error al registrar el usuario');
    }
};

exports.login = async (req, res) => {
    try {
        const { nickname, password } = req.body;
        const user = await User.findOne({ nickname });
        if (!user) return res.status(400).send('Credenciales inválidas');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).send('Credenciales inválidas');

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '30m' });
        res.json({ token, role: user.role });
    } catch (error) {
        res.status(500).send('Error al iniciar sesión');
    }
};
// Obtener todos los usuarios
exports.getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error al traer los Usuarios:', error);
        res.status(500).send('Error al traer los Usuarios');
    }
};

// Obtener usuario por ID
exports.getAUser= async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('Usuario no encontrado');
        res.json(user);
    } catch (error) {
        console.error('Error al traer el usuario:', error);
        res.status(500).send('Error al traer el usuario');
    }
};

// Actualizar usuario (PATCH)
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).send('Usuario no encontrado');
        res.json(user);
    } catch (error) {
        console.error('Error al modificar el usuario:', error);
        res.status(500).send('Error al modificar el usuario');
    }
};

// Actualizar usuario (PUT)

exports.updateUserPut= async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({_id: req.params.id},req.body);
        if (!user) return res.status(404).send('Usuario no encontrado');
        res.json(user);
    } catch (error) {
        console.error('Error al modificar el usuario:', error);
        res.status(500).send('Error al modificar el usuario');
    }
};
// Eliminar usuario
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id });

        if (user) {
            return res.status(200).send({ message: 'Usuario eliminado correctamente' });
        } else {
            return res.status(404).send('Usuario no encontrado');
        }
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        return res.status(500).send('Error al eliminar el usuario');
    }
};