import express from 'express'
import multer, { StorageEngine } from 'multer'
import { v4 as uuid} from "uuid"
import path from 'path'

const storage: StorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve(__dirname, '../../uploads');
    cb(null, uploadPath)
  },
  filename: function (req, file, cb) {
    const id = uuid();
    const extName = path.extname(file.originalname);
    const fileName = `${id}${extName}`;
    console.log(fileName)
    console.log("Running")
    cb(null, fileName)
  }
})

export const upload = multer({ storage: storage })