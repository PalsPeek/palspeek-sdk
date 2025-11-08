/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { handler_LoginRequest } from '../models/handler_LoginRequest';
import type { handler_PasswordChangeRequest } from '../models/handler_PasswordChangeRequest';
import type { handler_SignupRequest } from '../models/handler_SignupRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Change current user password
     * Changes the password of the authenticated user
     * @returns string Password changed successfully
     * @throws ApiError
     */
    public static postAuthChangePassword({
        password,
    }: {
        /**
         * Old and new password
         */
        password: handler_PasswordChangeRequest,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/change-password',
            body: password,
            errors: {
                400: `Invalid input`,
                401: `Unauthorized`,
                403: `Old password incorrect`,
                404: `User not found`,
                500: `Hashing or update error`,
            },
        });
    }
    /**
     * Authenticate user and return JWT
     * Logs in a user and returns a JWT token with basic user info
     * @returns any JWT and user info
     * @throws ApiError
     */
    public static postAuthLogin({
        credentials,
    }: {
        /**
         * Login credentials
         */
        credentials: handler_LoginRequest,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: credentials,
            errors: {
                400: `Invalid input`,
                401: `Invalid credentials`,
                500: `Token generation error`,
            },
        });
    }
    /**
     * Register a new user
     * Creates a user account with username, email, and password
     * @returns string User created successfully
     * @throws ApiError
     */
    public static postAuthSignup({
        user,
    }: {
        /**
         * User registration payload
         */
        user: handler_SignupRequest,
    }): CancelablePromise<Record<string, string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/signup',
            body: user,
            errors: {
                400: `Invalid input`,
                409: `Username or email already exists`,
                500: `Database or hashing error`,
            },
        });
    }
}
