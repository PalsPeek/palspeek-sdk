/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type handler_UpdateProfileRequest = {
    about_me?: string;
    birth_date?: string;
    current_city?: string;
    education?: string;
    email?: string;
    first_name?: string;
    gender?: handler_UpdateProfileRequest.gender;
    hometown?: string;
    interests?: string;
    last_name?: string;
    profile_picture?: string;
    relationship_status?: handler_UpdateProfileRequest.relationship_status;
    workplace?: string;
};
export namespace handler_UpdateProfileRequest {
    export enum gender {
        M = 'M',
        F = 'F',
        O = 'O',
    }
    export enum relationship_status {
        S = 'S',
        R = 'R',
        E = 'E',
        M = 'M',
        C = 'C',
        N = 'N',
    }
}

