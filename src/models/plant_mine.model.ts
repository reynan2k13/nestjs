import * as mongoose from 'mongoose';

export const PlantMineSchema = new mongoose.Schema({
  filename : {type: String},
  file_size : {type: Number},
  unit_count : {type: Number},
  other_info : {type: Number},
  priority : {type: String},
  received_date : {type: Date},
  xmit_date : {type: Date},
  project_name : {type: String},
  ansi_standard : {type: String},
  project_in_charge : {type: String},
  aql_configuration : {type: String},
  project_accuracy : {type: Array},
  job_card_id : {type: String},
  cluster_name : {type: String},
  shipment_number : {type: String},
  item_number : {type: String},
  audit_type : {type: String},
  week_period : {type: Number},
  mined_list : {type: Array},


}, {versionKey : false});

export interface PlantMine {

}
