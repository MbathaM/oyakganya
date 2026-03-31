import { mistralLargeModel } from '@/ai/mistral';
import { tools } from '@/ai/tools';
import { SYSTEM_INSTRUCTION } from '@/config/constants';
import { streamText, UIMessage, convertToModelMessages, stepCountIs, } from 'ai';

export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model: mistralLargeModel,
        system: SYSTEM_INSTRUCTION,
        messages: await convertToModelMessages(messages),
        tools,
        stopWhen: stepCountIs(10),
    });

    return result.toUIMessageStreamResponse();
}