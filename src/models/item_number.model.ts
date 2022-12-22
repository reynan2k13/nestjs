import * as mongoose from 'mongoose';

export const ItemNumberSchema = new mongoose.Schema({
  project : {type: String},
  data : [
    {
      item_number : {type: String},
      description : {type: String},
      is_Active : {type: Boolean}
    }
  ]
}, {versionKey : false});

export interface ItemNumber {

}
