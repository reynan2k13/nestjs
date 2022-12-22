import * as mongoose from 'mongoose';

export const UomSchema = new mongoose.Schema({
  project : {type: String},
  data : [
    {
      uom : {type: String},
      selection : {type: Number},
      tag : {type: String},
      charcter_count : {type: Number}
    }
  ]
}, {versionKey : false});

export interface Uom {

}
