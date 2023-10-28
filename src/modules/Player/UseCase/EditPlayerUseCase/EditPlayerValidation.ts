  import { z } from "zod";
        
        const editplayerSchema = z.object({
            name: z.string({
                invalid_type_error:"O campo nome deve ser do tipo string."
            }),
            shirt_number: z.number({
                invalid_type_error:"O campo shirt_number deve ser um número inteiro."
            }),
            team_id: z.string({
                invalid_type_error:"O campo team_id deve ser uma string."
            })
        });

       export class EditPlayerValidation {
            static validate(data:z.infer<typeof editplayerSchema>):z.infer<typeof editplayerSchema> {
               
        
                const validateData = editplayerSchema.safeParse(data);
        
                if (!validateData.success) {
                    throw new Error(validateData.error.errors[0].message);
                }
        
                return data;
            }
        }
        