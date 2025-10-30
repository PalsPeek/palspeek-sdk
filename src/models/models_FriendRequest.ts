/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_FriendRequestStatus } from './models_FriendRequestStatus';
import type { models_User } from './models_User';
export type models_FriendRequest = {
    created_at?: string;
    id?: number;
    receiver?: models_User;
    receiver_id?: number;
    sender?: models_User;
    sender_id?: number;
    status?: models_FriendRequestStatus;
};

