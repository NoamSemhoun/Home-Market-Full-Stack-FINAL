//multer
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, '../Database/Images');
    },
    filename: (req, file,callback)=>{
        callback(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage:storage});

module.exports = upload;