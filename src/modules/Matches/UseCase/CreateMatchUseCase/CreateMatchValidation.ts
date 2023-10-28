  import { z } from "zod";
        
        const creatematchSchema = z.object({
            start_time: z.string({
                invalid_type_error: "O campo start_time deve ser uma data.",
                required_error: "O campo start_time é obrigatório."
            }),
            end_time: z.string({
                invalid_type_error: "O campo end_time deve ser uma data.",
                required_error: "O campo end_time é obrigatório."
            }),
            teamA_id: z.string({
                invalid_type_error: "O campo teamA_id deve ser uma string.",
                required_error: "O campo teamA_id é obrigatório."
            }),
            teamB_id: z.string({
                invalid_type_error: "O campo teamB_id deve ser uma string.",
                required_error: "O campo teamB_id é obrigatório."
            }),
        });

       export class CreateMatchValidation {
            static validate(data:z.infer<typeof creatematchSchema>):z.infer<typeof creatematchSchema> {
               
        
                const validateData = creatematchSchema.safeParse(data);
        
                if (!validateData.success) {
                    throw new Error(validateData.error.errors[0].message);
                }
        
                return data;
            }
        }
        