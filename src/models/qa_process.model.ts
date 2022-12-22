import * as mongoose from 'mongoose';

export const QaProcessSchema = new mongoose.Schema({
  task_code : {type: String},
  task_description : {type: String},
  required : {type: Boolean},
  task_sequence : {type: Number},
}, {versionKey : false});

export interface QaProcess {

}
