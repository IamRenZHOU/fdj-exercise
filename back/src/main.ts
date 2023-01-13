import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('FDJ Exercise API')
    .setDescription('The FDJ API exercise, for returning information for a football team and it players')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000)
}

bootstrap()
