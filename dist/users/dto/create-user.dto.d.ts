export declare class projects {
    name: string;
    test: string;
}
export declare class CreateUserDto {
    user_id: string;
    password: string;
    fullname: string;
    email_address: string;
    facility: string;
    group_name: string;
    facility_name: string;
    location: string;
    projects: projects[];
    menu_access: Array<any>;
    active: boolean;
}
