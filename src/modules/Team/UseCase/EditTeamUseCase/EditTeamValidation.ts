  import { z } from "zod";
        
        const editteamSchema = z.object({
            name: z.string({
                invalid_type_error:"O campo nome deve ser do tipo string.", 
                required_error: "O campo nome é obrigatório."}),
            });

       export class EditTeamValidation {
            static validate(data:z.infer<typeof editteamSchema>):z.infer<typeof editteamSchema> {
               
        
                const validateData = editteamSchema.safeParse(data);
        
                if (!validateData.success) {
                    throw new Error(validateData.error.errors[0].message);
                }
        
                return data;
            }
        }
        