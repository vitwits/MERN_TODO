const { Router } = require( 'express' )
const User = require( '../models/User' )
const router = Router()
const { body, validationResult } = require( 'express-validator' )
const bcrypt = require('bcryptjs')

router.post( '/registration',
  [
    body( 'email', 'Wrong email' ).isEmail(), //middleware for validating
    body( 'password', 'Wrong password' ).isLength( { min: 6 } )
  ],
  async (req, res) => {
    try {
      
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({
          errors: errors.array(),
          message: 'Wrong data during the registration'
        })
      }
      
      const { email, password } = req.body
      const isUsed = await User.findOne( { email } )
      if (isUsed) {
        return res.status( 300 ).json( { message: 'The email is already in use' } )
      }
      
      const hashedPassword = await bcrypt.hash(password, 12) //encrypting password before sending to db
      
      const user = new User( {
        email, password: hashedPassword
      } )
      
      res.status( 201 ).json( { message: 'User created' } )
      
      await user.save()
    } catch (err) {
      console.log( err.message );
    }
  } )


module.exports = router;