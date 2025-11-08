import type { models_Gender } from './models_Gender';
import type { models_Group } from './models_Group';
import type { models_Post } from './models_Post';
import type { models_PostComment } from './models_PostComment';
import type { models_RelationshipStatus } from './models_RelationshipStatus';
export type models_User = {
    about_me?: string;
    /**
     * Custom fields
     */
    birth_date?: string;
    comments?: Array<models_PostComment>;
    created_at?: string;
    current_city?: string;
    date_joined?: string;
    education?: string;
    email: string;
    first_name?: string;
    friends?: Array<models_User>;
    /**
     * "M", "F", "O"
     */
    gender?: models_Gender;
    groups?: Array<models_Group>;
    hometown?: string;
    id?: number;
    interests?: string;
    is_staff?: boolean;
    last_name?: string;
    /**
     * Relationships
     */
    liked_posts?: Array<models_Post>;
    posts?: Array<models_Post>;
    /**
     * Path to image file
     */
    profile_picture?: string;
    /**
     * "S", "R", "E", "M", "C", "N"
     */
    relationship_status?: models_RelationshipStatus;
    updated_at?: string;
    username: string;
    workplace?: string;
};
