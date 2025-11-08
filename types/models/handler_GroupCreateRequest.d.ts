import type { models_Privacy } from './models_Privacy';
export type handler_GroupCreateRequest = {
    description?: string;
    name: string;
    privacy: models_Privacy;
    profile_picture?: string;
};
