const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lyrics: {
    lastLyricId: Number,
    correct: Number,
    wrong: Number,
  },
  minesweeperScore: {
    type    : Number,
    required: true,
  },
  memoryScore: {
    type    : Number,
    required: true,
  },
  flyingBeanScore: {
    type    : Number,
    required: true,
  },
});

const LyricSchema = new mongoose.Schema({
  lyricId: Number,
  title: String,
  singer: String,
  lyric: String,
  choices: [String],
  correctChoice: Number,
  video: {
    videoId: String,
    start: Number,
    end: Number,
  },
});
// Mongoose will assume there is a collection called the plural of this name
// (i.e. 'users' in this case).
const userModel = mongoose.model("User", UserSchema);
const lyricModel = mongoose.model("Lyric", LyricSchema);

module.exports = {userModel, lyricModel};
