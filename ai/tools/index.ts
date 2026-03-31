import { InferUITools } from 'ai';
import { bookingTool } from './booking';

export const bookingTools = {
    bookingTool,
};

export const tools = {
    ...bookingTools,
};

export type ChatTools = InferUITools<typeof tools>;