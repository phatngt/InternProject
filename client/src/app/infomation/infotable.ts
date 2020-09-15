import {ConfigService} from "../configure/config.service";
export class InforTable {
    constructor(private configService:ConfigService) {}
    
    public async getTypeUrl(name:string):Promise<string>{
        switch(name){
            case "employee": let config =(await (this.configService.getConfig())).employeeUrl;
                             return config;
        }
    }
}   