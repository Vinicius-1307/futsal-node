
        import { inject, injectable } from "tsyringe";
    
        @injectable()
        export class EditTeamUseCase {
            
            constructor(@inject("ExampleRepository") private exampleRepository:IExampleRepository){}
    
            async execute(){
    
                // Implement your use case logic here
    
                throw new Error("Method not implemented");
    
                return;
            }
    
           }