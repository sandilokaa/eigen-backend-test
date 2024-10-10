import express from 'express';
import { connectDatabase } from './infrastructure/database/connection';
import router from './application/routes';
import { setupSwagger } from './swagger';

const app = express();
app.use(express.json());
const PORT = 3000;

setupSwagger(app);

app.use('/api/v1', router);

export const startServer = async () => {
    try {
        await connectDatabase();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
    
};

export default app;