import * as mongoose from 'mongoose';

export const ErrorTypeSchema = new mongoose.Schema({
  project : {type: String},
  data : [
    {
      error_code : {type: String},
      error_type : {type: String},
      error_class : {type: String},
      description : {type: String},
      main_category : {type: String},
    }
  ]
}, {versionKey : false});

export interface ErrorType {

}
