const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const invitacionSchema = new Schema({
    email : {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    titulo: {
        type: String,
        required:true
    }, 
    rsvp: {
        type: Number,
        required: true,
    },
    invites: {
        type: Number,
        required: true,
    },

});


const Invitacion = mongoose.model('Invitacion', invitacionSchema);

module.exports = Invitacion;

