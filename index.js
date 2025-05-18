const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/moives', movieRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
