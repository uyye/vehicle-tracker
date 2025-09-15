import express from 'express'
import ReportController from '../controllers/report.controller'
const router = express.Router()

router.get('/', ReportController.excelReport)

export default router