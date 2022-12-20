import * as mongoose from 'mongoose';

export const AuditRequestSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  full_name: { type: String, required: true },
  email_address: { type: String, required: true },
  facility: { type: String, required: true },
  group_name: { type: String, required: true },
  facility_name: { type: String, required: true },
  location: { type: String, required: true },
  projects: { type: Array },
  menu_access: { type: Array },
  is_active: { type: Boolean, required: true },

}, {versionKey : false});

export interface AuditRequest {
  _id: string;

}
