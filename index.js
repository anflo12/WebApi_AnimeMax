var express = require('express')
var http = require('http')
var app = express()
const API = require('animeflv-scrapper')
const params = {
  status: 1,
  page: 1,
}

app.get('/animes', (req, res) => {
 
  API.getAnimes(params).then(data => {
    console.log(data)
    res.status(200).send({data})
  })
})

app.get('/AnimeEpisode', (req, res) => {
 
  API.getAnimeInfo('pokemon-2019', 5668).then(dataepisode => {
    console.log(dataepisode)
    res.status(200).send({dataepisode})
  })
})

app.set('port',process.env.PORT || 3000)

http.createServer(app).listen(app.get('port'), () => {
  console.log('Server started at http://localhost:8001');
});


