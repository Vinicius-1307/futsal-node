  import { z } from "zod";
        
        const deleteteamSchema = z.object({});

       export class DeleteTeamValidation {
            static validate(data:z.infer<typeof deleteteamSchema>):z.infer<typeof deleteteamSchema> {
               
        
                const validateData = deleteteamSchema.safeParse(data);
        
                if (!validateData.success) {
                    throw new Error(validateData.error.errors[0].message);
                }
        
                return data;
            }
        }
        