  import { z } from "zod";
        
        const authuserSchema = z.object({
            email: z.string({
                invalid_type_error:"O campo e-mail deve ser do tipo string.", 
                required_error: "O campo e-mail é obrigatório."})
                .email("O e-mail é inválido."),
            password: z.string({
                invalid_type_error:"O campo senha deve ser do tipo string.", 
                required_error: "O campo senha é obrigatório."})
                .min(8, "A senha deve ter no minímo 8 caracteres.")
        });

       export class AuthUserValidation {
            static validate(data:z.infer<typeof authuserSchema>):z.infer<typeof authuserSchema> {
               
        
                const validateData = authuserSchema.safeParse(data);
        
                if (!validateData.success) {
                    throw new Error(validateData.error.errors[0].message);
                }
        
                return data;
            }
        }
        