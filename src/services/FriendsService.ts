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
    public static getFriends(): CancelablePromise<Array<models_User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/friends',
        });
    }
    /**
     * Accept a friend request
     * @param id Request ID
     * @returns string OK
     * @throws ApiError
     */
    public static postFriendsAccept(
        id: string,
    ): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/friends/accept/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Reject a friend request
     * @param id Request ID
     * @returns string OK
     * @throws ApiError
     */
    public static postFriendsReject(
        id: string,
    ): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/friends/reject/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Remove a friend
     * @param id Friend User ID
     * @returns string OK
     * @throws ApiError
     */
    public static deleteFriendsRemove(
        id: string,
    ): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/friends/remove/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Send a friend request
     * @param id Receiver User ID
     * @returns string OK
     * @throws ApiError
     */
    public static postFriendsRequest(
        id: string,
    ): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/friends/request/{id}',
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
    public static getFriendsRequests(): CancelablePromise<Array<models_FriendRequest>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/friends/requests',
            errors: {
                401: `Unauthorized`,
                500: `Internal Server Error`,
            },
        });
    }
}
