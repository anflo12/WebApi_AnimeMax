var express = require('express')
var http = require('http')
var app = express()
const API = require('animeflv-scrapper')

const params = {
  year: 2019,
  type: "tv",
  status: 2,
  order: "added",
  page: 1
};
app.get('/Animes', (req, res) => {
 
  API.getAnimes(params).then(data => {
    console.log(data)
    res.status(200).send({data})
  })
})

app.get('/AnimeEpisode', (req, res) => {
 
  API.getAnimeInfo("pet", 54043).then(dataepisode => {
    console.log(dataepisode)
    res.status(200).send({dataepisode})
  })
})

app.get('/LatestEpisodes', (req, res) => {
 
  API.getLatestEpisodes().then(data => {
    console.log(data)
    res.status(200).send({data})
  })
})

app.get('/AllAnimes', (req, res) => {
 
  API.getAnimes(params).then(data => {
    res.status(200).send({data})
  });
   
})

app.get('/GetEpisodes', (req, res) => {
 
  API.getEpisodeVideos(9, "pet", 54043).then(data => {
    console.log(data);
    res.status(200).send({data})
  });
   
})

app
app.set('port',process.env.PORT || 3000)

http.createServer(app).listen(app.get('port'), () => {
  console.log('Server started at http://localhost:3000');
});


