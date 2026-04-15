// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import seeAndDoRoutes from './routes/seeAndDo.js';
import stayRoutes from './routes/stay.js';
import eatAndDrinkRoutes from './routes/eatAndDrink.js';
import communitiesRoutes from './routes/communities.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/see-and-do', seeAndDoRoutes);
app.use('/api/stay', stayRoutes);
app.use('/api/eat-and-drink', eatAndDrinkRoutes);
app.use('/api/communities', communitiesRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'San Narciso Tourism API is running!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});