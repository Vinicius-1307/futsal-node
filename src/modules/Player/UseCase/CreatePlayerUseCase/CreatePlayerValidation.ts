  import { z } from "zod";
        
        const createplayerSchema = z.object({
            name: z.string({
                invalid_type_error:"O campo nome deve ser do tipo string.", 
                required_error: "O campo nome é obrigatório."}),
            shirt_number: z.number({
                invalid_type_error:"O campo shirt_number deve ser um número inteiro.",
                required_error: "O campo shirt_number é obrigatório."
            }),
            team_id: z.string({
                invalid_type_error:"O campo team_id deve ser uma string.",
                required_error: "O campo team_id é obrigatório."
            })
        });

       export class CreatePlayerValidation {
            static validate(data:z.infer<typeof createplayerSchema>):z.infer<typeof createplayerSchema> {
               
        
                const validateData = createplayerSchema.safeParse(data);
        
                if (!validateData.success) {
                    throw new Error(validateData.error.errors[0].message);
                }
        
                return data;
            }
        }
        