/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { handler_UpdateProfileRequest } from '../models/handler_UpdateProfileRequest';
import type { models_User } from '../models/models_User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Get current authenticated user
     * Returns the authenticated user's profile with groups and friends
     * @returns models_User OK
     * @throws ApiError
     */
    public static getApiV1UsersMe(): CancelablePromise<models_User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/me',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Update current user profile
     * Updates optional fields in the user's profile
     * @returns models_User OK
     * @throws ApiError
     */
    public static patchApiV1UsersMe({
        profile,
    }: {
        /**
         * Profile update payload
         */
        profile: handler_UpdateProfileRequest,
    }): CancelablePromise<models_User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v1/users/me',
            body: profile,
            errors: {
                400: `Invalid input`,
                401: `Unauthorized`,
                404: `User not found`,
                500: `Database error`,
            },
        });
    }
    /**
     * Get user by username
     * Returns user public profile including public groups and friends
     * @returns models_User OK
     * @throws ApiError
     */
    public static getApiV1Users({
        username,
    }: {
        /**
         * Username
         */
        username: string,
    }): CancelablePromise<models_User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/{username}',
            path: {
                'username': username,
            },
            errors: {
                400: `Username required`,
                404: `User not found`,
            },
        });
    }
}
