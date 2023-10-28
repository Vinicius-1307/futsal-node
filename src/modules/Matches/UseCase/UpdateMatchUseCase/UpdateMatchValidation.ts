  import { z } from "zod";
        
        const updatematchSchema = z.object({
            goalsTeamA: z.number({
                invalid_type_error:"O campo goalsTeamA deev ser um número.",
                required_error: "O campo goalsTeamA é obrigatório."
            }),
            goalsTeamB: z.number({
                invalid_type_error:"O campo goalsTeamB deev ser um número.",
                required_error: "O campo goalsTeamB é obrigatório."
            })
        });

       export class UpdateMatchValidation {
            static validate(data:z.infer<typeof updatematchSchema>):z.infer<typeof updatematchSchema> {
               
        
                const validateData = updatematchSchema.safeParse(data);
        
                if (!validateData.success) {
                    throw new Error(validateData.error.errors[0].message);
                }
        
                return data;
            }
        }
        