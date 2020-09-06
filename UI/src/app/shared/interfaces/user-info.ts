export interface UserInfo {
    id?: number;
    username?: string;
    name?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    is_staff?: boolean;
    groups?: Array<any>;
    password?: string;
    date_joined?: Date;
    is_superuser?: boolean;
    last_login?: Date;
    reset_token?: string;
}