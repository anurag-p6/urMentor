import express from 'express'
import multer, { StorageEngine } from 'multer'
import { v4 as uuid} from "uuid"

const storage: StorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads')
  },
  filename: function (req, file, cb) {
    const id = uuid();
    
    const extName = file.originalname.split(".").pop();

    const fileName = `${id}.${extName}`;

    cb(null, fileName)
  }
})

export const upload = multer({ storage: storage })