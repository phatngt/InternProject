import {TypeOrmModuleOptions} from '@nestjs/typeorm'
import Page from 'src/page/page.entity'
export const DB_CONFIG: TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    host: '127.0.0.1',
    username:'postgres',
    //password:'1',
    password:'123456',
    database:'PersonnelManager',
    // entities: [Page],
    autoLoadEntities:true,
    synchronize:true
}