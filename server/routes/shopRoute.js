const express=require("express");
const { createShop, createItems, items, shops, deleteItem ,userShops } = require("../controllers/shopController");
const { isAuthenticated } = require("../middleware/auth");
const router=express.Router();
router.route("/createShop").post(isAuthenticated,createShop);
router.route("/createItem").post(isAuthenticated,createItems);
router.route("/items").get(isAuthenticated,items);
router.route("/shops/user").get(isAuthenticated,userShops);
router.route("/deleteItem").put(isAuthenticated,deleteItem);
router.route("/shops").get(shops);
module.exports=router;