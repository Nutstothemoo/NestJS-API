
import { INestApplication, ValidationPipe } from '@nestjs/common';
import {Test} from '@nestjs/testing'
import { PrismaService } from 'src/prisma/prisma.service';
import { AppModule } from '../src/app.module';

describe ('App e2e', async () => {

  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async ()=> {
    const moduleRef = await Test.createTestingModule({
      imports:[AppModule]
    }).compile();
    
    app = moduleRef.createNestApplication();
    app.useGlobalPipes( new ValidationPipe({
      whitelist:true,
    }))
  });
  await app.init();
  await app.listen(3333);

  prisma = app.get(PrismaService);
  // await prisma.cleanDb();
  // pactum.request.setBaseUrl(
  //   'http://localhost:3333',
  // );
// });

afterAll(() => {
  app.close();
});
  it.todo('pass')
});