import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' })
      return
    }

    // Store in a database
    const newMessage = {
      email,
      name,
      message,
    }

    let client
    try {
      client = await MongoClient.connect(process.env.MongoURI, {
        useUnifiedTopology: true,
      })
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' })
      return
    }

    let db
    try {
      db = client.db('RudoBlog')
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
      await client.close()
      res
        .status(200)
        .json({ message: 'Successfully stored message!', newMessage })
    } catch (error) {
      await client.close()
      res.status(500).json({ message: 'Storing message failed!' })
      return
    }
  }
}

export default handler
