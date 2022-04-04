import { nanoid } from 'nanoid';

export async function generateId(): Promise<string> {
    return nanoid();
}
