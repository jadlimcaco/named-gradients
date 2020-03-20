
   // All the CSS Color names
   const colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue",
   "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson",
   "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen",
   "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise",
   "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Gainsboro",
   "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
   "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow",
   "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue",
   "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple",
   "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream",
   "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod",
   "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple",
   "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver",
   "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet",
   "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
 ];

 // Randomize Function
 const shuffle = arr => arr.sort(() => Math.random() - 0.5);

 // Create every possible combination colors
 const gradients = colors.flatMap(
   (color1, color2) => colors.slice(color2 + 1).map(w => color1 + ', ' + w)
 );

 // Randomize order of colors
 shuffle(gradients);

 // Create gradient grid of colors
 const list = gradients.forEach((gradient) => {
   const li = document.createElement("li");
   li.classList.add('gradient-wrap');
   const text = `
       <div class='gradient' style='background-image: linear-gradient(90deg, ${gradient});'></div>
       <p class='gradient-title'>${gradient}</p>
       `;
   li.innerHTML = text;
   document.querySelector("#gradients").appendChild(li);

 });

 // Copy Gradient
 const copyGradients = document.querySelectorAll('.gradient-wrap');
 copyGradients.forEach((item) => {

   item.addEventListener('click', function() {

     const temp = document.createElement('textarea');
     const currentItem = item.querySelector('.gradient-title');

     // Set value of input box to CSS code
     temp.value = `background-image: linear-gradient(90deg, ${currentItem.innerHTML});`;
     temp.value = temp.value.toLowerCase();
     this.appendChild(temp);
     temp.select();

     // Copy CSSVG Code
     document.execCommand('copy');
     this.removeChild(temp);

     // Show 'copied' text and remove after 350ms
     this.classList.add('copied');
     const removeClass = () => this.classList.remove('copied');
     setTimeout(removeClass, 300);

   });

 });
