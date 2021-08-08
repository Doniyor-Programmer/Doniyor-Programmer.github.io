let img = document.querySelector(".img"),
    left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    tryAgain = document.querySelector(".tryAgain"),
    def = document.querySelector(".def");

left.addEventListener("click", () => {
    img.src = `image/windows-10 (6).jpg`;

    left.addEventListener("click", () => {
        img.src = `image/windows-10 (7).jpg`;

        left.addEventListener("click", () => {
            img.src = `image/windows-10 (8).jpg`;

            left.addEventListener("click", () => {
                img.src = `image/windows-10 (9).jpg`;
            });
        });
    });
});

right.addEventListener("click", () => {
    img.src = `image/windows-10 (4).jpg`;

    right.addEventListener("click", () => {
        img.src = `image/windows-10 (3).jpg`;

        right.addEventListener("click", () => {
            img.src = `image/windows-10 (2).jpg`;

            right.addEventListener("click", () => {
                img.src = `image/windows-10 (1).jpg`;
            });
        });
    });
});

tryAgain.addEventListener("click", () => {
   left.addEventListener("click", () => {
       img.src = `image/windows-10 (6).jpg`;

       left.addEventListener("click", () => {
           img.src = `image/windows-10 (7).jpg`;

           left.addEventListener("click", () => {
               img.src = `image/windows-10 (8).jpg`;

               left.addEventListener("click", () => {
                   img.src = `image/windows-10 (9).jpg`;
               });
           });
       });
   });

   right.addEventListener("click", () => {
       img.src = `image/windows-10 (4).jpg`;

       right.addEventListener("click", () => {
           img.src = `image/windows-10 (3).jpg`;

           right.addEventListener("click", () => {
               img.src = `image/windows-10 (2).jpg`;

               right.addEventListener("click", () => {
                   img.src = `image/windows-10 (1).jpg`;
               });
           });
       });
   }); 
});

def.addEventListener("click", () => {
    img.src = `image/windows-10 (5).jpg`;
});