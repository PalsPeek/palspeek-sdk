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
    static getUsersMe(): CancelablePromise<models_User>;
    /**
     * Update current user profile
     * Updates optional fields in the user's profile
     * @param profile Profile update payload
     * @returns models_User OK
     * @throws ApiError
     */
    static patchUsersMe(profile: handler_UpdateProfileRequest): CancelablePromise<models_User>;
    /**
     * Get user by username
     * Returns user public profile including public groups and friends
     * @param username Username
     * @returns models_User OK
     * @throws ApiError
     */
    static getUsers(username: string): CancelablePromise<models_User>;
}
