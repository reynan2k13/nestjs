import * as mongoose from 'mongoose';

export const ProjectAccuracySchema = new mongoose.Schema({
  project : {type: String},
  details : [
    {
      description : {type: String},
      accurcy : {type : Number}
    }
  ]
}, {versionKey : false});

export interface ProjectAccuracy {

}
