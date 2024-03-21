const express = require('express');
const router = express.Router();
const orderModel = require('../models/order');
router.get("/", (req, res) => orderModel.getAll(res));
router.post("/", (req, res) => orderModel.create(req, res));
router.put("/:orderId", (req, res) => orderModel.update(req.params.orderId, req.body, res));
router.delete("/:orderId", (req, res) => orderModel.delete(req.params.orderId, res));
router.get("/:orderId", (req, res) => orderModel.getOne(req.params.orderId, res));

module.exports = router;