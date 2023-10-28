  import { z } from "zod";
        
        const deleteplayerSchema = z.object({});

       export class DeletePlayerValidation {
            static validate(data:z.infer<typeof deleteplayerSchema>):z.infer<typeof deleteplayerSchema> {
               
        
                const validateData = deleteplayerSchema.safeParse(data);
        
                if (!validateData.success) {
                    throw new Error(validateData.error.errors[0].message);
                }
        
                return data;
            }
        }
        