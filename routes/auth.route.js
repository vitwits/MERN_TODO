const { Router } = require( 'express' )
const User = require( '../models/User' )
const router = Router()
const { body, validationResult } = require( 'express-validator' )
const bcrypt = require( 'bcryptjs' )
const jwtToken = require( 'jsonwebtoken' )
const dotenv = require( 'dotenv' );

dotenv.config();
router.post( '/registration',
  [
    body( 'email', 'Wrong email' ).isEmail(), //middleware for validating
    body( 'password', 'Wrong password' ).isLength( { min: 6 } )
  ],
  async (req, res) => {
    try {
      
      const errors = validationResult( req )
      if (!errors.isEmpty()) {
        return res.status( 400 ).json( {
          errors: errors.array(),
          message: 'Wrong data during the registration'
        } )
      }
      
      const { email, password } = req.body
      const isUsed = await User.findOne( { email } )
      if (isUsed) {
        return res.status( 300 ).json( { message: 'The email is already in use' } )
      }
      
      const hashedPassword = await bcrypt.hash( password, 12 ) //encrypting password before sending to db
      
      const user = new User( {
        email, password: hashedPassword
      } )
      
      res.status( 201 ).json( { message: 'User created' } )
      
      await user.save()
    } catch (err) {
      console.log( err.message );
    }
  } )

router.post( '/login',
  [
    body( 'email', 'Wrong email' ).isEmail(), //middleware for validating
    body( 'password', 'Wrong password' ).exists()
  ],
  async (req, res) => {
    try {
      
      const errors = validationResult( req )
      if (!errors.isEmpty()) {
        return res.status( 400 ).json( {
          errors: errors.array(),
          message: 'Wrong data during the registration'
        } )
      }
      
      const { email, password } = req.body
      
      const user = await User.findOne( { email } )
      
      if (!user) {
        return res.status( 400 ).json( { message: 'No such user in the database' } )
      }
      
      const isMatched = bcrypt.compare( password, user.password ) //compare entered password with encrypted one
      
      if (!isMatched) {
        return res.status( 400 ).json( { message: 'Password doesn\'t not match' } )
      }
      
      const JWT_SECRET = process.env.JWT_SECRET;
      
      const token = jwtToken.sign(   //arg1 - encrypted data, arg2 - secret key, arg3 - token lifetime
        {userId: user.id},
        JWT_SECRET,
        {expiresIn: '1h'}
      )
      
      res.json({token, userId: user.id})
      
    } catch (err) {
      console.log( err );
    }
  } )

module.exports = router;