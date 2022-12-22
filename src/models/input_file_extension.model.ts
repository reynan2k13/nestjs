import * as mongoose from 'mongoose';

export const InputFileExtensionSchema = new mongoose.Schema({
  project : {type: String},
  data : [
    {
      description : {type: String},
      extension : {type: String},
    }
  ]
}, {versionKey : false});

export interface InputFileExtension {

}
