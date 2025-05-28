import { Router } from "express";

const router = Router();

let nextId = 4;
const users = [
    { id: 1, name: 'Arne' },
    { id: 2, name: 'Minho' },
    { id: 3, name: 'Charlie' },
];

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Get a list of all the users in the system.
 *     responses:
 *       200:
 *         description: Returns all users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: Arne
 *             example:
 *               data:
 *                 - id: 1
 *                   name: Arne
 *                 - id: 2
 *                   name: Minho
 *                 - id: 3
 *                   name: Charlie
 */
router.get('/api/users', (req, res) => {
    res.send({ data: users });
});

/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user. Expects a JSON object with a "name" property.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: Alice
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 4
 *                     name:
 *                       type: string
 *                       example: Alice
 *             example:
 *               data:
 *                 id: 4
 *                 name: Alice
 */
router.post('/api/users', (req, res) => {
    const newUser = req.body;
    newUser.id = nextId++;
    users.push(newUser);

    res.send({ data: newUser });
});

export default router;