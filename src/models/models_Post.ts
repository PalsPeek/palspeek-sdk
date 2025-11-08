/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_Group } from './models_Group';
import type { models_PostComment } from './models_PostComment';
import type { models_User } from './models_User';
export type models_Post = {
    author?: models_User;
    author_id?: number;
    comments?: Array<models_PostComment>;
    content: string;
    created_at?: string;
    group?: models_Group;
    /**
     * Group association (Optional)
     */
    group_id?: number;
    id?: number;
    liked_by?: Array<models_User>;
    updated_at?: string;
};

