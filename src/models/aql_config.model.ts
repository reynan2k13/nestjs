import * as mongoose from 'mongoose';

export const AqlSchema = new mongoose.Schema({
  name : {type: String},
  data : [
    {
      description : {type: String},
      percentage : {type: Number},
      type : {type: String},
      nfactor : {type: Number},
      mfactor : {type: Number},
    }
  ]
}, {versionKey : false});

export interface Aql {

}
