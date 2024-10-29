const {Router} = require("express")
const Entryht = require("../controllers/entrys")

const router = Router()

router.post("/", Entryht.postEntry)

router.get("/", Entryht.getlistarEntrys)

router.get("/holder/:id", Entryht.getListarporHolder)

router.get("/dia", Entryht.getListarporDia)

router.get("/fecha", Entryht.getListarentryEntreFechas)

router.put("/salida/:id", Entryht.putRegistrarEntradaOutput)

module.exports = router