/**
 * @swagger
 * tags:
 *   - name: Members
 *     description: Member operations
 */

/**
 * @swagger
 * /api/v1/members:
 *   get:
 *     tags: [Members]
 *     summary: Get all members
 *     responses:
 *       200:
 *         description: A list of members
 */

/**
 * @swagger
 * /api/v1/members:
 *   post:
 *     tags: [Members]
 *     summary: Create a new member
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               code:
 *                 type: string
 *     responses:
 *       201:
 *         description: Member created successfully
 */