//function to check media querie mobile
const mobile = (mw) => {
    if (mw.matches) { // If media query matches
        const processBox = document.querySelectorAll('.process-box');
        console.log(processBox);
        if(processBox !== null || undefined ) {
            processBox.forEach((e,i) => {
                console.log(e);
                return e.setAttribute( 'data-aos', 'zoom-in' )
            });
        };
    }

}

export { mobile };

