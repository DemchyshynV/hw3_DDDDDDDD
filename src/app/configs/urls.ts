import {environment} from '../../environments/environment';

const baseURL = environment.API;

export const urls = {
  users: `${baseURL}/users`,
}
