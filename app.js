

var num = Math.floor(Math.random() * 20) + 1;



$("#card").wScratchPad({
  size: 40, // The size of the brush/scratch.
  
  
  bg: `${num}.jpg` , // Background image path.
  fg: `Friendsgiving1.jpg`, // Foreground image path.
  cursor: 'pointer' // Cursor type.

 
  
});

$("#card2").wScratchPad({
  size: 100, // The size of the brush/scratch.
  
  
  bg: `Gpay_Card ${num}.jpg`, // Background image path.
  
  fg: 'Drinkcover.jpg', // Foreground image path.
  cursor: 'pointer' // Cursor type.

  //var num = Math.floor(Math.random() * 25) + 1;
})

;

