import React from 'react'
import { useLocation } from 'react-router-dom';

type Props = {}
const width:number = 19
const height:number = 25

// let array = new Uint8Array(width * height);
let array = Array.from(
  { length:  width * height},
  (v, i) => '{}'
)


const genMatrixCircle = (xc:number,yc:number,r:number) => {
    if (r < 1) return;

  let x = r, y = 0,  // for Bresenham / mid-point circle
      cd = 0,
      xoff = 0,
      yoff = r,
      b = -r,
      p0, p1, w0, w1;

  while (xoff <= yoff) {
    p0 = xc - xoff;
    p1 = xc - yoff;
    w0 = xoff + xoff;
    w1 = yoff + yoff;

    hl(p0, yc - yoff, yc + yoff, w0);  // fill a "line"
    hl(p1, yc - xoff, yc + xoff, w1);

    if ((b += xoff+++xoff) >= 0) {
      b -= --yoff + yoff;
    }
  }

  // for fill
  function hl(x:number, y1:number, y2:number, w:number) {
    w++;
    var xw = 0;
    while (w--) {
      xw = x + w;
      setPixel(xw, y1);
      setPixel(xw, y2);
    }
  }

  function setPixel(x:number, y:number) {
	if (x < width && y < height && x >= 0 && y >= 0)
		array[y * width + x] = '  ';
  }
}

function sliceIntoChunks(arr:Array<number|string>, chunkSize:number) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
  }
  return res;
}


const About = (props: Props) => {
  // console.log(array)
  let char = 'abcdefghijklmnopqrstuvwxyz'
  console.log(char.indexOf('c'));
  
  genMatrixCircle(10,9,5)
  // genMatrixCircle({xc:2,yc:5,r:5})
  // genMatrixCircle({xc:17,yc:20,r:5})

  // console.log(array)
  let new_arr = sliceIntoChunks(array,width)
  // console.log(new_arr);
  
  for (let i = 0; i < new_arr.length; i++) {
    const element = new_arr[i];
    // console.log(element.join(''));
  }
    
  return (
    <div>About
      <pre>
        {array}
      </pre>
    </div>
  )
}

export default About