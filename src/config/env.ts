// env.ts
import dotenvx from '@dotenvx/dotenvx';
import path from 'path';
import { z } from 'zod/v4';

const envPath = path.resolve(
  process.cwd(),
  process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production',
);

const envConfig = dotenvx.config({ path: envPath, quiet: true });

if (envConfig.error) {
  console.error('Error loading environment variables:', JSON.stringify(envConfig.error, null, 2));
  process.exit(1);
}

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  BASE_URL: z.url({ error: 'Invalid URL format for BASE_URL' }).default('https://playwright.dev'),
});

export type Env = z.infer<typeof EnvSchema>;

const parsedEnv = EnvSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('Failed to parse environment variables:', z.treeifyError(parsedEnv.error));
  process.exit(1);
}

export const env = parsedEnv.data;
export default parsedEnv.data;
