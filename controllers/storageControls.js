import multer from "multer";
import path from "path"

const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null, path.resolve('./public/uploads/'));
    },

    filename: function(req, link, cb){
        const filename = `${Date.now()}- ${link.originalname}`
        cb(null, filename)
    },
})

const fileFilter = (req, link, cb)=>{
    if(link.mimetype === 'application/pdf'){
        cb(null, true)
    }else{
        cb(new Error("Only pdfs are allowed"), false)
    }
}

export const uploads = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 15 * 1024 * 1024 }
})
