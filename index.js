const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ ok: true, msg: 'Demo Autopilot running' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
