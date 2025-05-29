import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

import multer from 'multer';

const uploadsDir = './uploads';
const maxSize = 3 * 1024 * 1024; // 3MB
const validMimeTypes = ["image/png", "image/svg", "image/jpeg"];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(undefined, uploadsDir);
    },
    filename: (req, file, cb) => {
        const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const uniqueFilename = `${uniquePrefix}__${file.originalname}`;
        
        cb(undefined, uniqueFilename);
    }
});

function fileFilter(req, file, cb) {

    if (!validMimeTypes.includes(file.mimetype)) {
        cb(new Error("File type not allowed: " + file.mimetype), false);
    } else {
        cb(null, true);
    }
}

const upload = multer({
    storage,
    limits: {
        fileSize: maxSize
    },
    fileFilter
});




app.post("/form", (req, res) => {
    console.log(req.body);
    delete req.body.password;
    res.send(req.body);
});

app.post("/fileform", upload.single('file'), (req, res) => {
    console.log("File info:", req.file);
    console.log("Other fields:", req.body);
    console.log(".............................................");
    res.send({ message: "Upload received", filename: req.file?.filename });
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
