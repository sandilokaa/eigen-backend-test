import AppDataSource from "../database/typeorm.config";

export const connectDatabase = async () => {
    console.log('Attempting to connect to the database...');
    try {
        await AppDataSource.initialize();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Error during Data Source initialization:', error);
    }
};