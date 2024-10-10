module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        '**/__tests__/**/*.ts?(x)',
        "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    testPathIgnorePatterns: [
        "/node_modules/"
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
};