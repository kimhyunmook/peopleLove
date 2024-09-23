import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // CORS 설정 추가
    app.enableCors({
      origin: '*', // 요청을 허용할 출처 (모든 출처 허용 시 '*')
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // 쿠키 허용
    });
  await app.listen(5000);
}
bootstrap();
