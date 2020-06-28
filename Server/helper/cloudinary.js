const cloudinary = require('cloudinary');
const dotenv = require('dotenv')

dotenv.config()

cloudinary.config({
    cloud_name: 'thaovan',
    api_key: '683374937318798',
    api_secret: 'giC6HiltiIgwMBotscmvL9NlGvs'
})

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            console.log("clound" ,file)
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: 'auto',
            folder: folder
        })
    })
}