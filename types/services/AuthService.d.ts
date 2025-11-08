import type { handler_LoginRequest } from '../models/handler_LoginRequest';
import type { handler_PasswordChangeRequest } from '../models/handler_PasswordChangeRequest';
import type { handler_SignupRequest } from '../models/handler_SignupRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AuthService {
    /**
     * Change current user password
     * Changes the password of the authenticated user
     * @returns string Password changed successfully
     * @throws ApiError
     */
    static postAuthChangePassword({ password, }: {
        /**
         * Old and new password
         */
        password: handler_PasswordChangeRequest;
    }): CancelablePromise<Record<string, string>>;
    /**
     * Authenticate user and return JWT
     * Logs in a user and returns a JWT token with basic user info
     * @returns any JWT and user info
     * @throws ApiError
     */
    static postAuthLogin({ credentials, }: {
        /**
         * Login credentials
         */
        credentials: handler_LoginRequest;
    }): CancelablePromise<any>;
    /**
     * Register a new user
     * Creates a user account with username, email, and password
     * @returns string User created successfully
     * @throws ApiError
     */
    static postAuthSignup({ user, }: {
        /**
         * User registration payload
         */
        user: handler_SignupRequest;
    }): CancelablePromise<Record<string, string>>;
}
