import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-core/presets-zod";
import { z } from "zod";

export const env = createEnv({
  server: {
    MISTRAL_API_KEY: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
  },
  client: {},
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually

  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {},

  extends: [vercel()],
});