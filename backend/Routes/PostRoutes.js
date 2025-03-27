import {Router} from "express"
import {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
} from "../Controllers/PostController.js"
const router = Router()

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

export default router;

