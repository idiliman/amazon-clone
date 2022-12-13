export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_ID: string;
      GOOGLE_SECRET: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
