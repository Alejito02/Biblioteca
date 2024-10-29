const {Router} = require("express")
const {check} = require("express-validator")
const Holderht = require("../controllers/holders")
const {helpHolder} = require("../helpers/holders.js")
const {validarCampos} = require("../middleware/validar_datos.js")

const router = Router()



router.get("/", Holderht.getListarHolders)

router.get("/:id", [
    check("id","Id no valido").isMongoId(), 
    check("id","no existe en la bd").custom(helpHolder.validarId)
], Holderht.getListarId)

router.post("/", [
    check("email", "El email es obligatorio").notEmpty(),
    check("email","el email debe ser unico").custom(helpHolder.validarEmail),
    check("password", "La contraseña es obligatoria").notEmpty(),
    check("password", "la contraseña debe ser mínimo de 8 caracteres").isLength({min:8}),
    check("document", "el documento es obligatorio").notEmpty(),
    check("document", "el documento debe ser único").custom(helpHolder.validarDocument),
    check("name", "El nombre es obligatorio").notEmpty(),
    check("rol", "El rol es obligatorio").notEmpty(),
    check("phone", "El telefono es obligatorio").notEmpty(),
    check("state", "El estado es obligatorio").notEmpty(),
    validarCampos
], Holderht.postHolder)

router.put("/:id", [
    check("id","Id no valido").isMongoId(), 
    check("id","no existe en la bd").custom(helpHolder.validarId)
], Holderht.putModificarHolder)

router.put("/activate/:id", [
    check("id","Id no valido").isMongoId(), 
    check("id","no existe en la bd").custom(helpHolder.validarId)
], Holderht.putActivar)

router.put("/unactivate/:id", [
    check("id","Id no valido").isMongoId(), 
    check("id","no existe en la bd").custom(helpHolder.validarId)
], Holderht.putInactivarHolder)

module.exports = router