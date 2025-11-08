/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { handler_GroupCreateRequest } from '../models/handler_GroupCreateRequest';
import type { handler_PostCreateRequest } from '../models/handler_PostCreateRequest';
import type { models_Group } from '../models/models_Group';
import type { models_Post } from '../models/models_Post';
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
    /**
     * Get all members of a group
     * Returns a paginated list of group members
     * @returns any OK
     * @throws ApiError
     */
    public static getApiV1GroupsMembers({
        id,
        page,
        limit,
    }: {
        /**
         * Group ID
         */
        id: string,
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
            url: '/api/v1/groups/{id}/members',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `Group ID required or invalid pagination`,
                401: `Unauthorized`,
                403: `Access denied`,
                404: `Group not found`,
                500: `Failed to fetch members`,
            },
        });
    }
    /**
     * Remove a member from a group
     * Removes a user from the group (admin/moderator only)
     * @returns string Member removed successfully
     * @throws ApiError
     */
    public static deleteApiV1GroupsMembers({
        id,
        memberId,
    }: {
        /**
         * Group ID
         */
        id: string,
        /**
         * Member ID to remove
         */
        memberId: string,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/groups/{id}/members/{memberId}',
            path: {
                'id': id,
                'memberId': memberId,
            },
            errors: {
                400: `Invalid IDs`,
                401: `Unauthorized`,
                403: `Permission denied`,
                404: `Group or member not found`,
                500: `Failed to remove member`,
            },
        });
    }
    /**
     * Promote a member to moderator
     * Promotes a group member to moderator role (admin only)
     * @returns string Member promoted successfully
     * @throws ApiError
     */
    public static postApiV1GroupsMembersPromote({
        id,
        memberId,
    }: {
        /**
         * Group ID
         */
        id: string,
        /**
         * Member ID to promote
         */
        memberId: string,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/groups/{id}/members/{memberId}/promote',
            path: {
                'id': id,
                'memberId': memberId,
            },
            errors: {
                400: `Invalid IDs`,
                401: `Unauthorized`,
                403: `Permission denied`,
                404: `Group or member not found`,
                500: `Failed to promote member`,
            },
        });
    }
    /**
     * Get all posts from a group
     * Returns a paginated list of posts from a specific group
     * @returns any OK
     * @throws ApiError
     */
    public static getApiV1GroupsPosts({
        id,
        page,
        limit,
    }: {
        /**
         * Group ID
         */
        id: string,
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
            url: '/api/v1/groups/{id}/posts',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `Group ID required or invalid pagination`,
                401: `Unauthorized`,
                403: `Access denied`,
                404: `Group not found`,
                500: `Failed to fetch posts`,
            },
        });
    }
    /**
     * Create a post in a group
     * Creates a new post in the specified group
     * @returns models_Post Created
     * @throws ApiError
     */
    public static postApiV1GroupsPosts({
        id,
        post,
    }: {
        /**
         * Group ID
         */
        id: string,
        /**
         * Post content
         */
        post: handler_PostCreateRequest,
    }): CancelablePromise<models_Post> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/groups/{id}/posts',
            path: {
                'id': id,
            },
            body: post,
            errors: {
                400: `Invalid input`,
                401: `Unauthorized`,
                403: `Not a member of the group`,
                404: `Group not found`,
                500: `Failed to create post`,
            },
        });
    }
    /**
     * Get pending join requests
     * Returns all pending join requests for a group (admin/moderator only)
     * @returns any OK
     * @throws ApiError
     */
    public static getApiV1GroupsRequests({
        id,
        page,
        limit,
    }: {
        /**
         * Group ID
         */
        id: string,
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
            url: '/api/v1/groups/{id}/requests',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `Group ID required`,
                401: `Unauthorized`,
                403: `Permission denied`,
                404: `Group not found`,
                500: `Failed to fetch requests`,
            },
        });
    }
    /**
     * Approve a join request
     * Approves a pending join request and adds the user to the group (admin/moderator only)
     * @returns string Request approved successfully
     * @throws ApiError
     */
    public static postApiV1GroupsRequestsApprove({
        id,
        requestId,
    }: {
        /**
         * Group ID
         */
        id: string,
        /**
         * Request ID
         */
        requestId: string,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/groups/{id}/requests/{requestId}/approve',
            path: {
                'id': id,
                'requestId': requestId,
            },
            errors: {
                400: `Invalid IDs`,
                401: `Unauthorized`,
                403: `Permission denied`,
                404: `Request or group not found`,
                500: `Failed to approve request`,
            },
        });
    }
    /**
     * Reject a join request
     * Rejects a pending join request (admin/moderator only)
     * @returns string Request rejected successfully
     * @throws ApiError
     */
    public static postApiV1GroupsRequestsReject({
        id,
        requestId,
    }: {
        /**
         * Group ID
         */
        id: string,
        /**
         * Request ID
         */
        requestId: string,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/groups/{id}/requests/{requestId}/reject',
            path: {
                'id': id,
                'requestId': requestId,
            },
            errors: {
                400: `Invalid IDs`,
                401: `Unauthorized`,
                403: `Permission denied`,
                404: `Request or group not found`,
                500: `Failed to reject request`,
            },
        });
    }
}
