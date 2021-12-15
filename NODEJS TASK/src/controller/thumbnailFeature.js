import sharp from 'sharp';
import download from 'image-downloader';
import path from 'path'
import { Image } from '../model/thumbnailFeature.js';
import { User } from '../model/auth.js';

const ImageController ={
    thumbnail: async (req, res, next) => {
        const imageTypes = ['.jpg', '.tif', '.gif', '.png', '.svg']
  
            const {imageUrl} = req.body
            if(!imageUrl){
                res.status(400).json({
                    message:"upload your image"
                })
            }
        const imageUrlExt = path.extname(imageUrl).toLowerCase()
  
        if (imageTypes.includes(imageUrlExt)) {
            try{
            // Download the image and save it.
            const options = {
              url: imageUrl,
              dest: './public/images/original/',
            }
        
            // Set location for saving the resized images.
            const resizeFolder = './public/images/crop/'
        
            // Download image from the url and save in selected destination in options.
           const response= await download.image(options)
             const {filename}= response
                // Resize image to 50x50 and save to desired location.
                // Return conversion status to user.
                sharp(filename)
                  .resize(50, 50)
                  .toFile(`${resizeFolder}output.${imageUrlExt}`, (err) => {
                    if (err) { 
                        return next(err) 
                    }
                    return res.json({
                      converted: true,
                       user: User._id, 
                       success: 'Image has been resized', 
                       thumbnail: resizeFolder,
                    })
                  })
              }catch(err){
                res.status(400).json({
                     message: 'Oops! Something went wrong'
                     })
            } 
            
            }else{
                res.status(400).json({ 
                    message: `ensure the image files extensions are - ${[...imageTypes]}` 
                })
              }         
        }
            }
       
    export default ImageController;








