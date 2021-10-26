const albumsRepository = require('../data/repository/albums_repository')
const { reqError, serverError } = require('../common/errors')

exports.getAlbums = async (req, res) => {
    try {
        const albums = await albumsRepository.getAlbums(
            req.headers.matricula,
            req.query.categoria
        )
        res.status(200).send(albums)
    } catch (e) {
        sendError(res, serverError)
    }
}

exports.insertAlbum = async (req, res) => {
    const { nome, capa, categoria, artista, gravadora, ano } = req.body
    if (!nome || !capa || !categoria || !artista || !gravadora || !ano) {
        return sendError(res, reqError)
    }

    try {
        const album = await albumsRepository.insertAlbum(
            req.headers.matricula,
            req.body
        )
        res.status(200).send(album)
    } catch (e) {
        sendError(res, serverError)
    }
}

exports.updateAlbum = async (req, res) => {
    try {
        const id = req.params.id
        const album = await albumsRepository.updateAlbum(id, req.body)
        res.status(200).send(album)
    } catch (e) {
        sendError(res, serverError)
    }
}

exports.deleteAlbum = async (req, res) => {
    try {
        const id = req.params.id
        await albumsRepository.deleteAlbum(id)
        res.status(200).send()
    } catch (e) {
        sendError(res, serverError)
    }
}

exports.resetAlbums = async (_, res) => {
    try {
        await albumsRepository.clearAlbums()
        const albums = await albumsRepository.setAlbums()
        res.status(200).send(albums)
    } catch (e) {
        sendError(res, serverError)
    }
}

const sendError = (res, error) => res
    .status(error.status).send(error.msg)