import type { models_FriendRequest } from '../models/models_FriendRequest';
import type { models_User } from '../models/models_User';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class FriendsService {
    /**
     * List your friends
     * @returns models_User OK
     * @throws ApiError
     */
    static getApiV1Friends(): CancelablePromise<Array<models_User>>;
    /**
     * Accept a friend request
     * @returns string OK
     * @throws ApiError
     */
    static postApiV1FriendsAccept({ id, }: {
        /**
         * Request ID
         */
        id: string;
    }): CancelablePromise<Record<string, string>>;
    /**
     * Reject a friend request
     * @returns string OK
     * @throws ApiError
     */
    static postApiV1FriendsReject({ id, }: {
        /**
         * Request ID
         */
        id: string;
    }): CancelablePromise<Record<string, string>>;
    /**
     * Remove a friend
     * @returns string OK
     * @throws ApiError
     */
    static deleteApiV1FriendsRemove({ id, }: {
        /**
         * Friend User ID
         */
        id: string;
    }): CancelablePromise<Record<string, string>>;
    /**
     * Send a friend request
     * @returns string OK
     * @throws ApiError
     */
    static postApiV1FriendsRequest({ id, }: {
        /**
         * Receiver User ID
         */
        id: string;
    }): CancelablePromise<Record<string, string>>;
    /**
     * List friend requests received by the authenticated user
     * @returns models_FriendRequest OK
     * @throws ApiError
     */
    static getApiV1FriendsRequests(): CancelablePromise<Array<models_FriendRequest>>;
}
