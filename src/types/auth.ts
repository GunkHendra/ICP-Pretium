import { z } from "zod";

export type AuthType = {
    principal: string;
    publicKey: string;
    signature: string;
    timestamp: number;
}

const principalSchema = z.string().regex(/^([a-z0-9-]+)$/i, "Invalid Principal format");
const publicKeySchema = z.string().regex(/^[0-9a-fA-F]+$/, "Invalid public key format");
const signatureSchema = z.string().regex(/^[A-Za-z0-9+/=]+$/, "Invalid signature format");
const timestampSchema = z.number().int().nonnegative();

export const AuthSchema = z.object({
    principal: principalSchema,
    publicKey: publicKeySchema,
    signature: signatureSchema,
    timestamp: timestampSchema
});
