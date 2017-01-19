import { SET_NAME } from "./Constants";

export function setName(name: string): Action<string> {
    return {
        type: SET_NAME,
        data: name
    }
}