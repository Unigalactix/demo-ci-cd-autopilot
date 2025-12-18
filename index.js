const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, msg: 'Demo Autopilot running' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
