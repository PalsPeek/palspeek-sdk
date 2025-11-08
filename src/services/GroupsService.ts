/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { handler_GroupCreateRequest } from '../models/handler_GroupCreateRequest';
import type { models_Group } from '../models/models_Group';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GroupsService {
    /**
     * Create a new group
     * Creates a group with the given name, description, and privacy settings. The group will be associated with the authenticated user.
     * @returns models_Group Created
     * @throws ApiError
     */
    public static postApiV1Groups({
        group,
    }: {
        /**
         * Group creation payload
         */
        group: handler_GroupCreateRequest,
    }): CancelablePromise<models_Group> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/groups',
            body: group,
            errors: {
                400: `Invalid input or validation failed`,
                401: `Unauthorized or user ID fetch failed`,
                409: `Group already exists`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * List all public groups
     * Returns a paginated list of public groups
     * @returns any OK
     * @throws ApiError
     */
    public static getApiV1GroupsPublic({
        page,
        limit,
    }: {
        /**
         * Page number
         */
        page?: number,
        /**
         * Items per page
         */
        limit?: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/groups/public',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `Invalid page or limit`,
                500: `Failed to fetch groups`,
            },
        });
    }
    /**
     * Get a group by ID
     * Returns details of a group by its ID
     * @returns models_Group OK
     * @throws ApiError
     */
    public static getApiV1Groups({
        id,
    }: {
        /**
         * Group ID
         */
        id: string,
    }): CancelablePromise<models_Group> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/groups/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Group ID is required`,
                403: `Access denied`,
                404: `Group not found`,
                500: `Failed to fetch group`,
            },
        });
    }
    /**
     * Delete a group
     * Deletes a group owned by the authenticated user
     * @returns string Group deleted successfully
     * @throws ApiError
     */
    public static deleteApiV1Groups({
        id,
    }: {
        /**
         * Group ID
         */
        id: string,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/groups/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Group ID is required`,
                401: `Unauthorized`,
                403: `Permission denied`,
                404: `Group not found`,
                500: `Failed to delete group`,
            },
        });
    }
    /**
     * Invite a user to a private/secret group
     * [TODO:] Only the owner of the group can invite users
     * @returns void
     * @throws ApiError
     */
    public static postApiV1GroupsInvite(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/groups/{id}/invite/{username}',
        });
    }
    /**
     * Join a public group
     * Adds the authenticated user to the group members if the group is public
     * @returns string Successfully joined the group
     * @throws ApiError
     */
    public static postApiV1GroupsJoin({
        id,
    }: {
        /**
         * Group ID
         */
        id: string,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/groups/{id}/join',
            path: {
                'id': id,
            },
            errors: {
                400: `Group ID missing or invalid`,
                401: `Unauthorized`,
                403: `Join not allowed`,
                404: `Group not found`,
                409: `Already a member`,
                500: `Failed to join group`,
            },
        });
    }
    /**
     * Leave a group
     * Removes the authenticated user from the group
     * @returns string Successfully left the group
     * @throws ApiError
     */
    public static postApiV1GroupsLeave({
        id,
    }: {
        /**
         * Group ID
         */
        id: string,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/groups/{id}/leave',
            path: {
                'id': id,
            },
            errors: {
                400: `Group ID missing or invalid`,
                401: `Unauthorized`,
                404: `Group not found`,
                500: `Failed to leave group`,
            },
        });
    }
}
