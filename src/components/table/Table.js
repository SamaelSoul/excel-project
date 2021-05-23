import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from "./table.template";
import { $ } from "@core/dom";

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable(26);
  }

  // onClick() {
  //   console.log('click');
  // }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizable"]')
      document.onmousemove = e => {

      }
    }
  }

  // onMousemove() {
  //   console.log('mousemove');
  // }

  // onMouseup() {
  //   console.log('mouseup');
  // }
}
