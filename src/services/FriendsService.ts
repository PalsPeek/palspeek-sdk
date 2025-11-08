/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { models_FriendRequest } from '../models/models_FriendRequest';
import type { models_User } from '../models/models_User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FriendsService {
    /**
     * List your friends
     * @returns models_User OK
     * @throws ApiError
     */
    public static getApiV1Friends(): CancelablePromise<Array<models_User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/friends',
        });
    }
    /**
     * Accept a friend request
     * @returns string OK
     * @throws ApiError
     */
    public static postApiV1FriendsAccept({
        id,
    }: {
        /**
         * Request ID
         */
        id: string,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/friends/accept/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Reject a friend request
     * @returns string OK
     * @throws ApiError
     */
    public static postApiV1FriendsReject({
        id,
    }: {
        /**
         * Request ID
         */
        id: string,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/friends/reject/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Remove a friend
     * @returns string OK
     * @throws ApiError
     */
    public static deleteApiV1FriendsRemove({
        id,
    }: {
        /**
         * Friend User ID
         */
        id: string,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/friends/remove/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Send a friend request
     * @returns string OK
     * @throws ApiError
     */
    public static postApiV1FriendsRequest({
        id,
    }: {
        /**
         * Receiver User ID
         */
        id: string,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/friends/request/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                404: `Not Found`,
                409: `Conflict`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * List friend requests received by the authenticated user
     * @returns models_FriendRequest OK
     * @throws ApiError
     */
    public static getApiV1FriendsRequests(): CancelablePromise<Array<models_FriendRequest>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/friends/requests',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }
}
