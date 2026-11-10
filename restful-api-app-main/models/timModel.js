const mongoose = require("mongoose");

const kaptenSchema = new mongoose.Schema(
  {
    nama: { type: String, required: true },
    nickname: { type: String, required: true },
  },
  { _id: false },
);


const timSchema = new mongoose.Schema({
  kodeTim: {
    type: String,
    required: [true, "kode tim wajib diisi"],
    unique: true,
    trim: true,
  },
  namaTim: {
    type: String,
    required: [true, "nama tim wajib diisi"],
    trim: true,
  },
  jumlahPemain: {
    type: Number,
    required: [true, "jumlah pemain wajib diisi"],
    trim: true,
  },
  divisi: {
    type: String,
    required: [true, "divisi wajib diisi"],
    trim: true,
  },
  kapten: {
    type: kaptenSchema,
    required: [true, "kapten wajib diisi"],
  },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tim", timSchema);
