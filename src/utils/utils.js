export function shiftPages(val, dot, pages) {
  let _dot = dot + val;   
  if (_dot >= pages.length) {
    _dot = _dot - pages.length;
  } else if (_dot < 0) {
    _dot = _dot + pages.length;
  }
  return _dot;
}

export function sliceArray(cards, step) {
  const arrSlides = [];
  for (let i = 0; i < Math.ceil(cards.length/step); i++){
    arrSlides[i] = cards.slice((i*step), (i*step) + step);
  }
  return arrSlides;
}

export function getDots(cards, step) {
  let dots = Math.trunc(cards.length / step);
  if ((cards.length / step - dots) > 0) {
    dots+=1;
  }
  return dots;
}