const CODES = {
  A: 65,
  Z: 90,
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function createCol(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(content, info = '') {
  return `
    <div class="row">
      <div class="row-info">${info}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map((_, index) => {
        return String.fromCharCode(CODES.A + index);
      })
      .map(el => createCol(el))
      .join('');
  rows.push(createRow(cols));
  for (let i = 0; i < rowsCount; i++) {
    const cols = new Array(colsCount)
        .fill('')
        .map(el => createCell())
        .join('');
    rows.push(createRow(cols, i + 1));
  }

  return rows.join('');
}
