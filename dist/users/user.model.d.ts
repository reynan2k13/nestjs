import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    versionKey: false;
}>, {
    user_id: string;
    password: string;
    fullname: string;
    email_address: string;
    facility: string;
    group_name: string;
    facility_name: string;
    location: string;
    projects: any[];
    menu_access: any[];
    active: boolean;
}>;
export interface User {
    _id: string;
    user_id: string;
    password: string;
}
