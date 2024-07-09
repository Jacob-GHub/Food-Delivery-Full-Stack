import express from "express";
import authMiddleWare from "../middleware/auth.js";
import { PlaceOrder, verifyOrder, userOrders, listOrders, updateStatus} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleWare,PlaceOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddleWare,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)

export default orderRouter;