import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  sid: {
    type: String,
  },
  pid: {
    type: String,
  },
  tid: {
    type: String,
  },
  media: {
    type: file,
    required:true,
  },
},{timestamps:true});

const Gallery = mongoose.model("Gallery", gallerySchema)

export default Gallery