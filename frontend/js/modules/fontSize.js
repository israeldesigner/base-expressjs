const fontSize = () =>{

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
     }


     function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');

        for (var i = 0; i < ca.length; i ++) {
            var c = ca[i];

            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }

            if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length);
            }
        }

        return "";
     }

    const addAcess = () =>{
        let elements = document.getElementsByTagName('*');
        for (let element of elements) {
          element.classList.add('fnc-acessibility');
        }
    }

    const getComputedFont = (seletorAcessibility) =>{
        let sizeFont = window.getComputedStyle(seletorAcessibility, null).getPropertyValue('font-size');
        return parseFloat(sizeFont);
    }

    const changeSizeFonts = (seletorAcessibility, aumentar, normal) => {

        for (let i = 0; i < seletorAcessibility.length; i++) {
            const element = seletorAcessibility[i];
            let sizeFontCur = 0;

            if (normal) {
                element.style.fontSize = '';
                setCookie('font-size', element.style.fontSize = '');
            } else {
                if (aumentar){
                    sizeFontCur = getComputedFont(element) + 0.5;
                }
                else{
                    sizeFontCur = getComputedFont(element) - 0.5;
                }

                element.style.fontSize = sizeFontCur.toString() + 'px';
                setCookie('font-size', element.style.fontSize = sizeFontCur.toString() + 'px');
            }
        }
    }

    let acessibilityClass = document.getElementsByClassName('fnc-acessibility');
    let increaseFont = document.querySelector('#increase-font');
    let decreaseFont = document.querySelector('#decrease-font');
    let normalFont = document.querySelector('#normal-font');

    window.addEventListener('load', () => {
        increaseFont.addEventListener('click', e => {
            addAcess();
            changeSizeFonts(acessibilityClass, true);
        });

        normalFont.addEventListener('click', e => {
            changeSizeFonts(acessibilityClass, null, true);
        });

        decreaseFont.addEventListener('click', e => {
            addAcess();
            changeSizeFonts(acessibilityClass, false);
        });
    })


}

export { fontSize };
