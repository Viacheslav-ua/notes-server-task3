import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"
import { ValidationPipe } from "./pipes/validation.pipe"

const start = async () => {
  try {
    const PORT = process.env.PORT ?? 3001
    const app = await NestFactory.create(AppModule, { cors: true })

    const config = new DocumentBuilder()
      .setTitle('REST API server (notes-server-task3)')
      .setDescription('Documentation')
      .setVersion('1.0.0')
      .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/docs', app, document)

    app.useGlobalPipes( new ValidationPipe())
    
    await app.listen(PORT, () =>
      console.log(`Server running. Use our API on port: ${PORT}`),
    );
  } catch (e) {
    console.log(`Server not running. Error: ${e.message}`)
  }
}

start()

