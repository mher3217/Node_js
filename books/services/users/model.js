const mongoose = require('mongoose');
const shortid = require('shortid');

function generateAPIKey(){
  return shortid.generate() + '_' + shortid.generate() + '_' + shortid.generate();
}

module.exports = {
    usersSchema : new mongoose.Schema({
      key: {
        type: String,
        default: generateAPIKey()
      },
      username: {
        type:String,
        lowercase:true,
        trim:true,
        index:true,
        require:true
      },
      have_book:{
        type: []
      }
    }),


  booksSchema : new mongoose.Schema({
      key: {
        type: String,
        default: generateAPIKey()
      },
      title: {
        type:String,
        lowercase:true,
      },
      occupied: Boolean,
      pages: Number,
      occupied_by: {
        obj: String,//{type: Schema.Types.ObjectId, ref: 'users'},
      }
    }),
}
