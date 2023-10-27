  import { z } from "zod";
        
        const createteamSchema = z.object({
            name: z.string({
            invalid_type_error:"O campo nome deve ser do tipo string.", 
            required_error: "O campo nome é obrigatório."}),});

       export class CreateTeamValidation {
            static validate(data:z.infer<typeof createteamSchema>):z.infer<typeof createteamSchema> {
               
        
                const validateData = createteamSchema.safeParse(data);
        
                if (!validateData.success) {
                    throw new Error(validateData.error.errors[0].message);
                }
        
                return data;
            }
        }
        