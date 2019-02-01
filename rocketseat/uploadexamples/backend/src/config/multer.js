const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'), //destiny from file after upload
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (err, hash) => { // try to create a crypto to transform the name image unique
                if(err){
                    callback(err); 
                }

                 const fileName = `${hash.toString('hex')}-${file.originalname}`; // convert the bytes make in cripto in hexadecimal + name of file

                 callback(null, fileName);
            });
        },
    }),
    limits: { // limits of files when upload or size of file
        fileSize:  2 * 1024 *1024, // size of 2Mbytes because the size threat with byte
    },
    fileFilter: (req, file, callback) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];            

        if(allowedMimes.includes(file.mimetype)){
            callback(null, true); // error and success respectively in params
        }else{
            callback(new Error('Invalid file type'));
        }
    }
};