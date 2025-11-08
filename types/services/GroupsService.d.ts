import type { handler_GroupCreateRequest } from '../models/handler_GroupCreateRequest';
import type { handler_PostCreateRequest } from '../models/handler_PostCreateRequest';
import type { models_Group } from '../models/models_Group';
import type { models_Post } from '../models/models_Post';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class GroupsService {
    /**
     * Create a new group
     * Creates a group with the given name, description, and privacy settings. The group will be associated with the authenticated user.
     * @returns models_Group Created
     * @throws ApiError
     */
    static postApiV1Groups({ group, }: {
        /**
         * Group creation payload
         */
        group: handler_GroupCreateRequest;
    }): CancelablePromise<models_Group>;
    /**
     * List all public groups
     * Returns a paginated list of public groups
     * @returns any OK
     * @throws ApiError
     */
    static getApiV1GroupsPublic({ page, limit, }: {
        /**
         * Page number
         */
        page?: number;
        /**
         * Items per page
         */
        limit?: number;
    }): CancelablePromise<any>;
    /**
     * Get a group by ID
     * Returns details of a group by its ID
     * @returns models_Group OK
     * @throws ApiError
     */
    static getApiV1Groups({ id, }: {
        /**
         * Group ID
         */
        id: string;
    }): CancelablePromise<models_Group>;
    /**
     * Delete a group
     * Deletes a group owned by the authenticated user
     * @returns string Group deleted successfully
     * @throws ApiError
     */
    static deleteApiV1Groups({ id, }: {
        /**
         * Group ID
         */
        id: string;
    }): CancelablePromise<Record<string, string>>;
    /**
     * Invite a user to a private/secret group
     * [TODO:] Only the owner of the group can invite users
     * @returns void
     * @throws ApiError
     */
    static postApiV1GroupsInvite(): CancelablePromise<void>;
    /**
     * Join a public group
     * Adds the authenticated user to the group members if the group is public
     * @returns string Successfully joined the group
     * @throws ApiError
     */
    static postApiV1GroupsJoin({ id, }: {
        /**
         * Group ID
         */
        id: string;
    }): CancelablePromise<Record<string, string>>;
    /**
     * Leave a group
     * Removes the authenticated user from the group
     * @returns string Successfully left the group
     * @throws ApiError
     */
    static postApiV1GroupsLeave({ id, }: {
        /**
         * Group ID
         */
        id: string;
    }): CancelablePromise<Record<string, string>>;
    /**
     * Get all members of a group
     * Returns a paginated list of group members
     * @returns any OK
     * @throws ApiError
     */
    static getApiV1GroupsMembers({ id, page, limit, }: {
        /**
         * Group ID
         */
        id: string;
        /**
         * Page number
         */
        page?: number;
        /**
         * Items per page
         */
        limit?: number;
    }): CancelablePromise<any>;
    /**
     * Remove a member from a group
     * Removes a user from the group (admin/moderator only)
     * @returns string Member removed successfully
     * @throws ApiError
     */
    static deleteApiV1GroupsMembers({ id, memberId, }: {
        /**
         * Group ID
         */
        id: string;
        /**
         * Member ID to remove
         */
        memberId: string;
    }): CancelablePromise<Record<string, string>>;
    /**
     * Promote a member to moderator
     * Promotes a group member to moderator role (admin only)
     * @returns string Member promoted successfully
     * @throws ApiError
     */
    static postApiV1GroupsMembersPromote({ id, memberId, }: {
        /**
         * Group ID
         */
        id: string;
        /**
         * Member ID to promote
         */
        memberId: string;
    }): CancelablePromise<Record<string, string>>;
    /**
     * Get all posts from a group
     * Returns a paginated list of posts from a specific group
     * @returns any OK
     * @throws ApiError
     */
    static getApiV1GroupsPosts({ id, page, limit, }: {
        /**
         * Group ID
         */
        id: string;
        /**
         * Page number
         */
        page?: number;
        /**
         * Items per page
         */
        limit?: number;
    }): CancelablePromise<any>;
    /**
     * Create a post in a group
     * Creates a new post in the specified group
     * @returns models_Post Created
     * @throws ApiError
     */
    static postApiV1GroupsPosts({ id, post, }: {
        /**
         * Group ID
         */
        id: string;
        /**
         * Post content
         */
        post: handler_PostCreateRequest;
    }): CancelablePromise<models_Post>;
    /**
     * Get pending join requests
     * Returns all pending join requests for a group (admin/moderator only)
     * @returns any OK
     * @throws ApiError
     */
    static getApiV1GroupsRequests({ id, page, limit, }: {
        /**
         * Group ID
         */
        id: string;
        /**
         * Page number
         */
        page?: number;
        /**
         * Items per page
         */
        limit?: number;
    }): CancelablePromise<any>;
    /**
     * Approve a join request
     * Approves a pending join request and adds the user to the group (admin/moderator only)
     * @returns string Request approved successfully
     * @throws ApiError
     */
    static postApiV1GroupsRequestsApprove({ id, requestId, }: {
        /**
         * Group ID
         */
        id: string;
        /**
         * Request ID
         */
        requestId: string;
    }): CancelablePromise<Record<string, string>>;
    /**
     * Reject a join request
     * Rejects a pending join request (admin/moderator only)
     * @returns string Request rejected successfully
     * @throws ApiError
     */
    static postApiV1GroupsRequestsReject({ id, requestId, }: {
        /**
         * Group ID
         */
        id: string;
        /**
         * Request ID
         */
        requestId: string;
    }): CancelablePromise<Record<string, string>>;
}
