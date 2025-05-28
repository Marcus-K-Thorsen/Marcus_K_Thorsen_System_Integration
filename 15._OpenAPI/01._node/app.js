import express from 'express';
const app = express();

app.use(express.json());



import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'Users API',
            version: '0.0.1'
        }
    },
    apis: ['./routers/*Router.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


import usersRouter from './routers/usersRouter.js';
app.use(usersRouter);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});