import type { handler_GroupCreateRequest } from '../models/handler_GroupCreateRequest';
import type { models_Group } from '../models/models_Group';
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
}
