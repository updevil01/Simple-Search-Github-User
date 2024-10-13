const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors')

app.use(cors())
app.get('/api/:username', async (req, res) => {
    const username = req.params.username;
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        res.status(200).json(response.data);
    } catch (err) {
        if (err.response && err.response.status === 404) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(500).json({ error: 'Error' });
        }
    }
});


app.listen(5000,()=>{
    console.log('server running')
})