import { SYSTEM_INSTRUCTION } from '@/config/constants';
import { env } from '@/env';
import { createMistral } from '@ai-sdk/mistral';
import { wrapLanguageModel } from 'ai';

export const mistral = createMistral({
  apiKey: env.MISTRAL_API_KEY,
});

export const mistralLargeModel = wrapLanguageModel({
  model: mistral('mistral-small-latest'),
  modelId: 'mistral/mistral-small-latest',
  providerId: 'mistral',
  middleware: [],
});