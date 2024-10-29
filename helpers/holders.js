const Holder = require("../models/holders");

const helpHolder = {
    validarEmail: async (email)=> {
        const existe = await Holder.find({email})
        if(existe.length > 0){
            throw new Error("Email existente");
            
        }
    },

    validarDocument: async (document)=> {
            const existe = await Holder.find({document})
            if(existe.length > 0){
                throw new Error("el documento ya existe");
                
            }
    },

    validarId: async (id) => {
        const existe = await Holder.findById(id)
        if(!existe){
            throw new Error("Id no existe");
            
        }
    }
}

module.exports = {helpHolder}