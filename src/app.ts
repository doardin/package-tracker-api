import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 8080;

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));

  await app.listen(PORT, () => {
    console.log(`🚀 SERVER START ON PORT ${PORT} 🚀`);
  });

}

bootstrap();
