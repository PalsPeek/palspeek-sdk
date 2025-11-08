import type { models_FriendRequest } from '../models/models_FriendRequest';
import type { models_User } from '../models/models_User';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class FriendsService {
    /**
     * List your friends
     * @returns models_User OK
     * @throws ApiError
     */
    static getFriends(): CancelablePromise<Array<models_User>>;
    /**
     * Accept a friend request
     * @param id Request ID
     * @returns string OK
     * @throws ApiError
     */
    static postFriendsAccept(id: string): CancelablePromise<Record<string, string>>;
    /**
     * Reject a friend request
     * @param id Request ID
     * @returns string OK
     * @throws ApiError
     */
    static postFriendsReject(id: string): CancelablePromise<Record<string, string>>;
    /**
     * Remove a friend
     * @param id Friend User ID
     * @returns string OK
     * @throws ApiError
     */
    static deleteFriendsRemove(id: string): CancelablePromise<Record<string, string>>;
    /**
     * Send a friend request
     * @param id Receiver User ID
     * @returns string OK
     * @throws ApiError
     */
    static postFriendsRequest(id: string): CancelablePromise<Record<string, string>>;
    /**
     * List friend requests received by the authenticated user
     * @returns models_FriendRequest OK
     * @throws ApiError
     */
    static getFriendsRequests(): CancelablePromise<Array<models_FriendRequest>>;
}
