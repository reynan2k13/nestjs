import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String},
  password: { type: String},
  full_name: { type: String},
  email_address: { type: String},
  facility: { type: String},
  group_name: { type: String},
  facility_name: { type: String},
  location: { type: String},
  projects: { type: Array },
  menu_access: { type: Array },
  is_active: { type: Boolean},

}, {versionKey : false});

export interface User {

  username: string;
  password: string;
}
