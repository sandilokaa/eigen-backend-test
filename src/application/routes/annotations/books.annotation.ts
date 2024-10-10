/**
 * @swagger
 * tags:
 *   - name: Books
 *     description: Book operations
 */

/**
 * @swagger
 * /api/v1/books:
 *   get:
 *     tags: [Books]
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: A list of books
 */

/**
 * @swagger
 * /api/v1/books:
 *   post:
 *     tags: [Books]
 *     summary: Create a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               stock:
 *                 type: number
 *     responses:
 *       201:
 *         description: Book created successfully
 */