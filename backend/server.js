import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json()); // to parse JSON bodies
app.use(cors()); // to enable CORS

// API Endpoints
app.get('/', (req,res)=>{
    res.send("API Working");
})

app.listen(port, () => console.log(`Server is running on port ${port}`));
