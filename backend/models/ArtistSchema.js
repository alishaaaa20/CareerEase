import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number,default:0},
  location: { type:String,default:""},
  price: { type: Number,default:0},  
  role: {
    type: String,
  },

  // Fields for artists only
  specialization: { type: String,default:"" },
  qualification: {
    type: String,default:"" 
  },

  experience: {
    type: String,default:""
  },
  date: {
    type: String,
    default:""
  },  
});

export default mongoose.model("Makeup Artist", ArtistSchema);