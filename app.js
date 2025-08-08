const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "✅ Backend How Much opérationnel !" });
});

app.listen(PORT, () => {
    console.log(`🚀 Backend How Much démarré sur le port ${PORT}`);
});
