import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {Router} from "./router";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  app.enableCors({credentials: true, origin: true});

  const config = new DocumentBuilder()
      .setTitle('Cloud Storage')
      .setVersion('1.0')
      .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  const router = new Router(app);

  await app.listen(1488);
}
bootstrap();
