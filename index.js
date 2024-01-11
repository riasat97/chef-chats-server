const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef Chats API server is running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefs.find(chef => parseInt(chef.id)=== id);
    res.send(chef)
})

app.get('/chefs/:id/recipes', (req, res) => {
    const chefId = parseInt(req.params.id);
    const chefRecipes = recipes.filter(recipe => parseInt(recipe.chef_id) === chefId);
    res.send(chefRecipes)

})

app.listen(port, () => {
    console.log(`Chef Chats API Server is running on port: ${port}`)
})
