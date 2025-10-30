/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_Privacy } from './models_Privacy';
import type { models_User } from './models_User';
export type models_Group = {
    created_at?: string;
    created_by?: number;
    description?: string;
    id?: number;
    members?: Array<models_User>;
    members_count?: number;
    name?: string;
    privacy?: models_Privacy;
    profile_picture?: string;
};

