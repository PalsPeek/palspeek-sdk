import type { handler_GroupCreateRequest } from '../models/handler_GroupCreateRequest';
import type { models_Group } from '../models/models_Group';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class GroupsService {
    /**
     * Create a new group
     * Creates a group with the given name, description, and privacy settings. The group will be associated with the authenticated user.
     * @param group Group creation payload
     * @returns models_Group Created
     * @throws ApiError
     */
    static postGroups(group: handler_GroupCreateRequest): CancelablePromise<models_Group>;
    /**
     * List all public groups
     * Returns a paginated list of public groups
     * @param page Page number
     * @param limit Items per page
     * @returns any OK
     * @throws ApiError
     */
    static getGroupsPublic(page?: number, limit?: number): CancelablePromise<any>;
    /**
     * Get a group by ID
     * Returns details of a group by its ID
     * @param id Group ID
     * @returns models_Group OK
     * @throws ApiError
     */
    static getGroups(id: string): CancelablePromise<models_Group>;
    /**
     * Delete a group
     * Deletes a group owned by the authenticated user
     * @param id Group ID
     * @returns string Group deleted successfully
     * @throws ApiError
     */
    static deleteGroups(id: string): CancelablePromise<Record<string, string>>;
    /**
     * Invite a user to a private/secret group
     * [TODO:] Only the owner of the group can invite users
     * @returns void
     * @throws ApiError
     */
    static postGroupsInvite(): CancelablePromise<void>;
    /**
     * Join a public group
     * Adds the authenticated user to the group members if the group is public
     * @param id Group ID
     * @returns string Successfully joined the group
     * @throws ApiError
     */
    static postGroupsJoin(id: string): CancelablePromise<Record<string, string>>;
    /**
     * Leave a group
     * Removes the authenticated user from the group
     * @param id Group ID
     * @returns string Successfully left the group
     * @throws ApiError
     */
    static postGroupsLeave(id: string): CancelablePromise<Record<string, string>>;
}
