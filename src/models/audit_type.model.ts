import * as mongoose from 'mongoose';

export const AuditTypeSchema = new mongoose.Schema({
  name : {type: String},
  description : {type: String},
}, {versionKey : false});

export interface AuditType {

}
