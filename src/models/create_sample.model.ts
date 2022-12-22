import * as mongoose from 'mongoose';

export const CreateSampleSchema = new mongoose.Schema({
  project_code : {type: String},
  item_number : {type: String},
  project_in_charge : {type: String},
  required_accuracy : {type: String},
  audit_type : {type: String},
  week_period : {type: Number},
  audit_counter : {type: Number},
  job_card_number : {type: String},
  cluster_name : {type: String},
  file_name : {type: String},
  total_file_size : {type: Number},
  tag_count : {type: Number},
  entities_count : {type: Number},
  character_count : {type: Number},
  white_space_count : {type: Number},
  hard_return_count : {type: Number},
  xml_input_filename : {type : String},
  xml_input_data : {type : String},


}, {versionKey : false});

export interface CreateSample {

}
