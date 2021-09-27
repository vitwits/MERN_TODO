const dotenv = require( 'dotenv' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5500

app.use( express.json( { extended: true } ) )
app.use( '/api/auth', require( './routes/auth.route' ) )
app.use( '/api/todo', require( './routes/todo.route' ) )

async function start() {
  try {
    await mongoose.connect( process.env.CONNECTION_URL,{ useUnifiedTopology: true, useNewUrlParser: true })
    
    app.listen( PORT, () => {
      console.log( `Server started on port ${PORT}` )
    } )
  } catch (err) {console.log( err )}
}

start()
