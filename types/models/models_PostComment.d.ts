import type { models_Post } from './models_Post';
import type { models_User } from './models_User';
export type models_PostComment = {
    /**
     * Usando ponteiro
     */
    author?: models_User;
    author_id?: number;
    content?: string;
    created_at?: string;
    id?: number;
    /**
     * Usando ponteiro
     */
    post?: models_Post;
    post_id?: number;
};
