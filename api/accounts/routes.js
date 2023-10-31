const express = require("express");
const { accountGet, createAnAccount, deleteAnAccount, uppdatingAnAccount } = require("./controllers");
const router=express.Router();


router.get("/api/accounts",accountGet)
router.post("/api/accounts",createAnAccount)
router.delete("/api/accounts/:id",deleteAnAccount)
router,put("/api/accounts/:id",uppdatingAnAccount)



module.exports=router;