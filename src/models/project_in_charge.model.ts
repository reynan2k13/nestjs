import * as mongoose from 'mongoose';

export const ProjectInChargeSchema = new mongoose.Schema({
  project : {type: String},
  data : [
    {
      username : {type: String},
      full_name : {type: String},
      email_address : {type: String},
    }
  ]
}, {versionKey : false});

export interface ProjectInCharge {

}
