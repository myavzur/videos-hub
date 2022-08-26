import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module';

import { SessionsModule } from './models/sessions/sessions.module';
import { getZero } from 'utils/get-zero';

const SERVER_HOST = process.env.SERVER_HOST || 'localhost'
const SERVER_PORT = process.env.SERVER_PORT || 5000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors({
    origin: process.env.SERVER_CORS_WHITELIST.split(', '),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  })

  // Sessions
  app.get(SessionsModule).initialize(app)

  // API
  app.setGlobalPrefix('api')
  const swaggerOptions = new DocumentBuilder()
    .setTitle('VideosHub API Docs')
    .setDescription('Be careful. Have fun. Don\'t use in production.')
    .setVersion('1.0.0')
    .build()
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions)
  SwaggerModule.setup('api/docs', app, swaggerDocument)


  // Started
  await app.listen(SERVER_PORT, () => {
    const logger = new Logger('Bootstrap')

    const date = new Date()
    const year  = getZero(date.getFullYear())
    const month = getZero(date.getMonth() + 1)
    const day   = getZero(date.getDate())
    const hour  = getZero(date.getHours())
    const minutes  = getZero(date.getMinutes())


    logger.verbose(`
      |----------------------------------------------------------|
      |   🎧 Server listening -> http://${SERVER_HOST}:${SERVER_PORT}           |
      |----------------------------------------------------------|
      |   📙 Documentation ->  http://${SERVER_HOST}:${SERVER_PORT}/api/docs    |
      |----------------------------------------------------------|
      |            ⏲️  Launched: ${hour}:${minutes} / ${day}.${month}.${year}               |
      |----------------------------------------------------------|
    `)
  });
}
bootstrap();
