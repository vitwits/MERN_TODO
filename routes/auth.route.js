import { Router } from "express";
import User from '../models/User';

const router = Router();

router.post( '/registration', (req, res) => {
  try {
    const { email, password } = req.body;
    const isUsed = await User.findOne({email})
    if(isUsed) {
      return res.status(300).json({message: 'The email is already in use'})
    }
    
    const user = new User({
      email, password
    })
    
    res.status(201).json(message: 'User created')
    
    await user.save()
  } catch (err) {
    console.log( err.message );
  }
} )


module.exports = router;