import type { handler_UpdateProfileRequest } from '../models/handler_UpdateProfileRequest';
import type { models_User } from '../models/models_User';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class UsersService {
    /**
     * Get current authenticated user
     * Returns the authenticated user's profile with groups and friends
     * @returns models_User OK
     * @throws ApiError
     */
    static getApiV1UsersMe(): CancelablePromise<models_User>;
    /**
     * Update current user profile
     * Updates optional fields in the user's profile
     * @returns models_User OK
     * @throws ApiError
     */
    static patchApiV1UsersMe({ profile, }: {
        /**
         * Profile update payload
         */
        profile: handler_UpdateProfileRequest;
    }): CancelablePromise<models_User>;
    /**
     * Get user by username
     * Returns user public profile including public groups and friends
     * @returns models_User OK
     * @throws ApiError
     */
    static getApiV1Users({ username, }: {
        /**
         * Username
         */
        username: string;
    }): CancelablePromise<models_User>;
}
