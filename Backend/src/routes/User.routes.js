import { Router } from "express";
import { getUser } from "../controllers/getUser.js";
import { userLogin } from "../controllers/userLogin.js";
import { userLogout } from "../controllers/userLogout.js";
import { userSetPassword } from "../controllers/userSetPassword.js";
import { userSignup } from "../controllers/userSignup.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

const UserRouter = Router();

UserRouter.post("/signup", userSignup); // User Registration
UserRouter.post("/login", userLogin); // User Login
UserRouter.post("/logout", authenticateUser, userLogout); // Logout User (requires authentication)
UserRouter.post("/set-password", authenticateUser, userSetPassword); // Change Password
UserRouter.get("/me", authenticateUser, getUser); // Get User Details

export { UserRouter };
