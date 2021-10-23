import { Application } from 'stimulus'
import DialogController from './controllers/dialog_controller'
import DrawerController from './controllers/drawer_controller'
import DropdownController from './controllers/dropdown_controller'
import FloatingActionController from './controllers/floating_action_controller'
import SnackbarController from './controllers/snackbar_controller'
import ToggleController from './controllers/toggle_controller'
import SheetController from './controllers/sheet_controller'
import SelectorController from './controllers/selector_controller'
import ChipController from './controllers/chip_controller'

function init(application) {
  if (!application) {
    application = Application.start()
  }

  application.register("dialog", DialogController)
  application.register("drawer", DrawerController)
  application.register("dropdown", DropdownController)
  application.register("floating-action", FloatingActionController)
  application.register("snackbar", SnackbarController)
  application.register("toggle", ToggleController)
  application.register("sheet", SheetController)
  application.register("selector", SelectorController)
  application.register("chip", ChipController)
}

export {
  DialogController,
  DrawerController,
  DropdownController,
  FloatingActionController,
  SnackbarController,
  ToggleController,
  SheetController,
  SelectorController,
  ChipController,
  init
}
