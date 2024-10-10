/**
 * @swagger
 * tags:
 *   - name: Borrowed Books
 *     description: Borrowed book operations
 */

/**
 * @swagger
 * /api/v1/borrow/{memberCode}/{bookCode}:
 *   post:
 *     tags: [Borrowed Books]
 *     summary: Borrow a book
 *     parameters:
 *       - in: path
 *         name: memberCode
 *         required: true
 *         description: The code of the member
 *         schema:
 *           type: string
 *       - in: path
 *         name: bookCode
 *         required: true
 *         description: The code of the book
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Book borrowed successfully
 */

/**
 * @swagger
 * /api/v1/borrow/{memberCode}:
 *   get:
 *     tags: [Borrowed Books]
 *     summary: Get count of borrowed books by member
 *     parameters:
 *       - in: path
 *         name: memberCode
 *         required: true
 *         description: The code of the member
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Count of borrowed books
 */

/**
 * @swagger
 * /api/v1/return/{memberCode}/{bookCode}:
 *   post:
 *     tags: [Borrowed Books]
 *     summary: Return a book
 *     parameters:
 *       - in: path
 *         name: memberCode
 *         required: true
 *         description: The code of the member
 *         schema:
 *           type: string
 *       - in: path
 *         name: bookCode
 *         required: true
 *         description: The code of the book
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Return book successfully
 */