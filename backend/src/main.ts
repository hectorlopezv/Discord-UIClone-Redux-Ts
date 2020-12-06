import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const cors_config = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  const app = await NestFactory.create(AppModule, { cors: cors_config });
  app.enableCors();
  const logger = new Logger();

  await app.listen(3000);
  logger.log(`Server is running in ${await app.getUrl()}`);
}
bootstrap();
