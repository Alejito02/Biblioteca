const entry = require("../models/entrys");
const { put } = require("../routers/holders");
const { putQRCode } = require("./laptops");


const Entryht = {
    postEntry: async (req, res) => {
        try {
            const { laptop, holder, entrytime, checkout, type } = req.body;
            const newEntry = new entry({
                laptop,
                holder,
                entrytime,
                checkout,
                type
            });
            await newEntry.save();
            res.json({ newEntry });
        } catch (error) {
            res.status(400).json({ error: "No se realizo la operación" });
        }
    },

    getListarporHolder: async (req, res) => {
        try {
            const { holder } = req.params;
            const entries = await entry.find({ holder });
            res.json({ entries });
        } catch (error) {
            res.status(400).json({ error: "No se realizo la operación" });
        }
    },
    getListarporDia: async (req, res) => {
        try {
            const { entrytime } = req.params;
            const entries = await entry.find({ entrytime });
            res.json({ entries });
        } catch (error) {
            res.status(400).json({ error: "No se realizo la operación" });
        }
    },
    getlistarEntrys: async (req, res) => {
        try {
            const entries = await entry.find();
            res.json({ entries });
        } catch (error) {
            res.status(400).json({ error: "No se realizo la operación" });
        }
    },

    getListarentryEntreFechas: async (req, res) => {
        try {
            const { entrytime, checkout } = req.params;
            const entries = await entry.find({ entrytime, checkout });
            res.json({ entries });
        } catch (error) {
            res.status(400).json({ error: "No se realizo la operación" });
        }
    },

    putRegistrarEntradaOutput: async (req, res) => {
        try {
            const { id } = req.params;
            const { checkout, type } = req.body;
            const entryModificado = await entry.findByIdAndUpdate(id, { checkout, type });
            res.json({ entryModificado });
        } catch (error) {
            res.status(400).json({ error: "No se realizo la operación" });
        }
    },


    }

module.exports = Entryht