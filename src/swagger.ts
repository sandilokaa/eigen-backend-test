import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { Express } from 'express';
import path from 'path';

export const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation for Eigen',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: [path.join(__dirname, './application/routes/annotations/*.ts')],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export { setupSwagger, swaggerDocs };