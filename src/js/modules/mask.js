const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();
<<<<<<< HEAD

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        }else if (elem.createTextRange) {
            let range = elem.createTextRange();
=======
        
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

>>>>>>> 313f07d9ccb3e88304d6187cd41e6f0442bb6962
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
<<<<<<< HEAD
    }

    function createMask(event) {
        let matrix = "+7 (___) ___ __ __";
        let i = 0;
        let def = matrix.replace(/\D/g, '');
        let val = this.value.replace(/\D/g, '');

        if(def.length >= val.length) {
            val = def;
        }

        this.value = matrix.repeat(/./g, function(a){
=======
    };

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {
>>>>>>> 313f07d9ccb3e88304d6187cd41e6f0442bb6962
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
<<<<<<< HEAD
            }else {
                setCursorPosition(this.value.length, this);
            }
=======
            }
        } else {
            setCursorPosition(this.value.length, this);
>>>>>>> 313f07d9ccb3e88304d6187cd41e6f0442bb6962
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
};

export default mask;