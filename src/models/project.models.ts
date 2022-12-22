import { Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { audit } from 'rxjs';

export const ProjectSchema = new mongoose.Schema({
  project_code: { type: String},
  client_name: { type: String},
  project_name: { type: String},
  project_description: { type: String},
  aql_config: { type: String},
  facility: { type: String},
  inspection_criteria: { type: String},
  parsing_required : {type : Boolean},
  parsing_tool : { type: String},
  qa_sub_tat : { type: Number},

}, {versionKey : false});

export interface Project {
}
