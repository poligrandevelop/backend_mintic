const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    nickname: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    administracion: { type: String, enum: ['boot', 'Admin', ' '], default: '' },
    role: { type: String, enum: ['superusuarios', 'user', 'tecnico', 'coordinador'], default: 'user' }
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);
