const Album = require('../models/albums/album')
const albumData = require('../dummy/albums_data.json')

exports.getAlbums = (matricula, categoria) => Album
    .find(categoria ? { categoria } : {})
    .or([{ matricula }, { matricula: { $eq: null } }])
    .sort({ 'criadoEm': -1 })
    .select('-criadoEm -owner')

exports.insertAlbum = (matricula, album) => Album.create({
    matricula,
    ...album
})

exports.updateAlbum = (id, album) => Album.findOneAndUpdate(
    { _id: id },
    { ...album },
    { new: true }
)

exports.deleteAlbum = id => Album.findOneAndDelete({ _id: id })

exports.clearAlbums = _ => Album.deleteMany({})

exports.setAlbums = _ => Album.insertMany(albumData)