import  express  from "express";
import { register, login} from "../Controllers/authController.js";
import { authenticate } from "../auth/verifyToken.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// contact us
router.get("/contact", authenticate, async (req, res) => {

    try {
        
        const {name, email, message} = req.body;

        if(!name || !email || !message){
            return res.status(400).json({success: false, message: "Please fill all fields"})
        }

        const userContact =  await User.findOne({_id: req.userId});

        if(userContact){
            const userMessage =  await userContact.addMessage(name, email, subject, message);

            res.status(201).json({success: true, message: "Message sent successfully", userMessage});
        }
    } catch (error) {
        console.log(error);
    }
    
  });

export default router;