const { Router } = require( 'express' )
const router = Router()
const Todo = require( '../models/Todo' )

router.post( '/add', async (req, res) => {
  try {
    const { text, userId } = req.body
    
    const todo = await new Todo( {
      text: text,
      owner: userId,
      completed: false,
      important: false
    } )
    
    await todo.save()
    
    res.json( todo )
    
  } catch (err) {
    console.log( err )
  }
} )

router.get( '/', async (req, res) => {
  try {
    const {userId} = req.query
    
    const todo = await Todo.find({owner: userId})
    
    res.json(todo)
    
  } catch (err) {
    console.log( err )
  }
} )

module.exports = router