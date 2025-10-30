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
    public static getUsersMe(): CancelablePromise<models_User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Update current user profile
     * Updates optional fields in the user's profile
     * @param profile Profile update payload
     * @returns models_User OK
     * @throws ApiError
     */
    public static patchUsersMe(
        profile: handler_UpdateProfileRequest,
    ): CancelablePromise<models_User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/me',
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
     * @param username Username
     * @returns models_User OK
     * @throws ApiError
     */
    public static getUsers(
        username: string,
    ): CancelablePromise<models_User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}',
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
