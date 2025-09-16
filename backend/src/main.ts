import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS設定（フロントエンドからアクセス可能にする）
  app.enableCors({
    origin: "http://localhost:5173", // ✨フロントエンドのURLを記載する
    methods: ["GET"], // ✨GETメソッドならOKだよと記載する
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
