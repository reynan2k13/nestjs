import * as mongoose from 'mongoose';

export const AuditRequestSchema = new mongoose.Schema({
  project: { type: String},
  project_in_charge: { type: Object},
  facility: { type: String},
  shipment_number: { type: String},
  accuracy_requirement: { type: String},
  item_number: { type: String},
  audit_type: { type: String},
  transmission_date: { type: String},
  audit_counter: { type: Number},
  cluster_folder_path: { type: String},
  requested_by : {type : String},
  requested_date : {type : Date},
  xml_filename : {type : String},
  xml_data : {type : String},


}, {versionKey : false});

export interface AuditRequest {
  _id: string;

}
