const express=require('express');
const cors=require('cors');
const {summaryRouter}=require('./routes/report.route')
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());
const port = process.env.PORT ||6000;

app.use('/api/v1',summaryRouter);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
