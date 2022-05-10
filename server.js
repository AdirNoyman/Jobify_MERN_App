import express from 'express';
const app = express();

// import middleware
import notFoundMiddleware from './middleware/not-found.js';

const port = process.env.PORT || 5000;

// Dummy home route
app.get('/', (req, res) => {
	res.send('<h1>Welcome Adiros 🤓</h1>');
});

// use middleware for not-found(404)
app.use(notFoundMiddleware);

app.listen(port, () => {
	console.log(`Server listening on port ${port} 🤓🤟...`);
});
