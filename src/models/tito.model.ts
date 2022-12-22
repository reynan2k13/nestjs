import * as mongoose from 'mongoose';

export const TitoSchema = new mongoose.Schema({
  work_date : {type: Date},
  task_in : {type: Date},
  task_out : {type: Date},
  total_hrs : {type: Number},
  project : {type: Date},
  task : {type: Date},
  remarks : {type: Date},
  username : {type : String}

}, {versionKey : false});

export interface Tito {

}
