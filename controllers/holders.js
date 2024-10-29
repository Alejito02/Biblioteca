const moongose = require("mongoose");
const Holder = require("../models/holders");

const Holderht = {
  getListarHolders: async (req, res) => {
    try {
      const holders = await Holder.find();
      res.json({ holders });
    } catch (error) {
      res.status(400), json({ error: "No se realizo la operación" });
    }
  },

  getListarId: async (req, res) => {
    try {
      const { id } = req.params;
      const holderId = await Holder.findById(id);
      res.json({ holderId });
    } catch (error) {
      res.status(400).json({ error: "No se realizo la operación" });
    }
  },

  postHolder: async (req, res) => {
    try {
      const { email, password, document, name, rol, ficha, photo, phone, state } =
        req.body;
      const newHolder = new Holder({
        email,
        password,
        document,
        name,
        rol,
        ficha,
        photo,
        phone,
        state,
      });
    await newHolder.save();
    res.json({newHolder})
    } catch (error) {
        res.status(400).json({ error: "No se realizo la operación" });
        console.log(error)
    }
  },

  putModificarHolder: async (req, res) => {
    try {
        const {id} = req.params;
        const { email, password, document, name, rol, ficha, photo, state } = req.body
        const holderModificado = await Holder.findByIdAndUpdate(id, {email, password, document, name, rol, ficha, photo, state })
        res.json({holderModificado});
    } catch (error) {
        res.status(400).json({ error: "No se realizo la operación" });
    }
  },

  putActivar: async (req, res) => {
    try {
        const {id} = req.params
        const holdersA = await Holder.findByIdAndUpdate(id,{state:1});
    res.json({holdersA})
    } catch (error) {
        res.status(400).json({ error: "No se realizo la operación " });
        console.log(error);
    }
  },

  putInactivarHolder: async (req, res) => {
    try {
        const {id} = req.params
        const holderIn = await Holder.findByIdAndUpdate(id, {state:0});
        res.json({holderIn})
    } catch (error) {
        res.status(400).json({ error: "No se realizo la operación" }); 
        console.log(error);
    }
  }
};

module.exports= Holderht
