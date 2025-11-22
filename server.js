import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/harga-emas', async (req, res) => {
  try {
    const url =
      "https://freegoldprice.org/api/v2?key=zpYTTrghOVoNXj9UyY4ym3C0pf8qY7nrpDscotNi9KU5TsZoYRuWENYRCxPT&action=GSPPJ";
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data emas' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
