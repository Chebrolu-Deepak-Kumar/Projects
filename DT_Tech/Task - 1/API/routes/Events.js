const router = require('express').Router();
const multer = require('multer');
const { ObjectId } = require('mongodb');
const { v4: uuidv4 } = require('uuid');

// Create a multer instance with desired configuration
const upload = multer({ dest: 'uploads/' });

function eventRoutes(connectToDatabase) {
  router.post('/events', upload.single('files'), async (req, res) => {
    try {
      const uid = uuidv4().replace(/-/g, '').substr(0, 18);
      const db = await connectToDatabase();
      const newEvent = {
        uid,
        ...req.body,
        createdAt: new Date(),
        file: req.file // Add the uploaded file to the newEvent object
      };
      await db.collection('events').insertOne(newEvent);
      res.status(201).json(newEvent);
    } catch (error) {
      console.error('Error inserting event:', error);
      res.status(500).json({ error: 'Failed to insert event.' });
    }
  });

  router.get('/event', async (req, res) => {
    try {
      const { id } = req.query;
      const db = await connectToDatabase();
      const event = await db.collection('events').findOne({ _id:new ObjectId(id) });
      if (event) {
        res.json(event);
      } else {
        res.status(404).json({ error: 'Event not found.' });
      }
    } catch (error) {
      console.error('Error fetching event by ID:', error);
      res.status(500).json({ error: 'Failed to fetch event.' });
    }
  });


  // GET route to fetch events with pagination by page number and limit
  router.get('/events', async (req, res) => {
    try {
      const { type = 'latest', limit = 5, page = 1 } = req.query;
      const skip = (page - 1) * limit;

      const db = await connectToDatabase();

      // Create the query based on the provided type
      const query = type === 'latest' ? {} : { type };

      const events = await db
        .collection('events')
        .find(query)
        .sort({ createdAt: -1, updatedAt:-1 })
        .skip(skip)
        .limit(parseInt(limit));

      const totalCount = await db.collection('events').countDocuments(query);
      res.json({
        events: await events.toArray(),
        total: totalCount,
        currentPage: parseInt(page),
        totalPages: Math.ceil(totalCount / limit),
      });
    } catch (error) {
      console.error('Error fetching events with pagination:', error);
      res.status(500).json({ error: 'Failed to fetch events.' });
    }
  });

  router.put('/events/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const db = await connectToDatabase();
      const collection = db.collection('events');
  
      const existingEvent = await collection.findOne({ _id: new ObjectId(id) });
  
      if (!existingEvent) {
        return res.status(404).json({ error: 'Event not found.' });
      }
  
      const updatedEvent = {
        ...existingEvent,
        ...req.body,
        updatedAt: new Date(),
      };

      await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedEvent });
  
      res.status(200).json(updatedEvent);
    } catch (error) {
      console.error('Error updating event:', error);
      res.status(500).json({ error: 'Failed to update event.' });
    }
  });

  router.delete('/events/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const db = await connectToDatabase();
      const result = await db.collection('events').deleteOne({ _id:new ObjectId(id) });
      if (result.deletedCount === 1) {
        res.json({ message: 'Event deleted successfully.' });
      } else {
        res.status(404).json({ error: 'Event not found.' });
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      res.status(500).json({ error: 'Failed to delete event.' });
    }
  });

  return router;
}

module.exports = eventRoutes;