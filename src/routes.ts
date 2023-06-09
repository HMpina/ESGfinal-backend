import { Router} from 'express'
import { getTimesheets } from './controller/TimesheetsController';
import { saveTimesheet } from './controller/TimesheetsController';
import { getTimesheet } from './controller/TimesheetsController';
import { updateTimesheet } from './controller/TimesheetsController';
import { deleteTimesheet } from './controller/TimesheetsController';
const routes = Router()
routes.get('/timesheets', getTimesheets)
routes.post('/timesheets', saveTimesheet)
routes.get('/timesheets/:id', getTimesheet)
routes.put('/timesheets/:id', updateTimesheet)
routes.delete('/timesheets/:id', deleteTimesheet)
export default routes