import { Application } from 'stimulus'
import DialogController from './controllers/dialog_controller'
import DrawerController from './controllers/drawer_controller'
import DropdownController from './controllers/dropdown_controller'
import ToggleController from './controllers/toggle_controller'

const application = Application.start()
application.register("dialog", DialogController)
application.register("drawer", DrawerController)
application.register("dropdown", DropdownController)
application.register("toggle", ToggleController)

export { application }
