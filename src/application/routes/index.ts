import { Router } from "express";
import { MemberController } from "../controllers/member.controller";
import { BookController } from "../controllers/book.controller";
import { BorrowedBookController } from "../controllers/borrowed-book.controller";
import './annotations/members.annotation';
import './annotations/books.annotation';
import './annotations/borrowed-book.annotation';
import { MemberService } from "../../domain/services/member.service";

const router = Router();

//Define Service
const memberService = new MemberService();

// Define Controller
const memberController = new MemberController(memberService);
const bookController = new BookController();
const borrowedBookController = new BorrowedBookController();


// Define Endpoint

// Member routes
router.get('/members', (req, res) => memberController.getMembers(req, res));
router.post('/members', (req, res) => memberController.createMember(req, res));

// Book routes
router.get('/books', (req, res) => bookController.getAvailableBooks(req, res));
router.post('/books', (req, res) => bookController.createBook(req, res));

// Borrowed book routes
router.post('/borrow/:memberCode/:bookCode', (req, res) => borrowedBookController.borrowBook(req, res));
router.get('/borrow/:memberCode', (req, res) => borrowedBookController.getCountBorrowedBooks(req, res));
router.post('/return/:memberCode/:bookCode', (req, res) => borrowedBookController.returnBook(req, res));


export default router;