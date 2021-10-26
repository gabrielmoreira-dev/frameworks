const express = require('express')
const router = express.Router()
const albumsController = require('../controllers/albums_controller')

router.get('/', albumsController.getAlbums)

router.post('/', albumsController.insertAlbum)

router.put('/:id', albumsController.updateAlbum)

router.delete('/:id', albumsController.deleteAlbum)

router.post('/reset', albumsController.resetAlbums)

module.exports = router