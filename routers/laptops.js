const {Router} = require("express")
const Laptopht = require("../controllers/laptops")

const router = Router()

router.get("/", Laptopht.getListarLaptops)

router.get("/:id", Laptopht.getListarId)

router.post("/", Laptopht.postLaptop)

router.put("/:id", Laptopht.putLaptop)

router.put("/inactivar/:id", Laptopht.putInactivarLaptop)

router.put("/activar/:id", Laptopht.putInactivarLaptop)

router.put("/qrcode/:id", Laptopht.putQRCode)

module.exports = router