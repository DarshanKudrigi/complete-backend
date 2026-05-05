const {ImageKit}  =  require ("@imagekit/nodejs");


const imagekit = new ImageKit({
    privateKey :process.env.IMAGE_KIT_PRIVATE_KEY,
});

async function uploadImage (buffer, title, caption){
    const result = await imagekit.files.upload({
        file : buffer.toString("base64"),
        fileName : "image.jpg",
        title: title,
        caption: caption
    })
    return result;
}

module.exports=uploadImage;
