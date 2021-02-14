const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal   = document.querySelector(modalSelector);
        const close   = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                }
                
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        windows.forEach(window => {
            window.style.display = 'none';
        });

        close.addEventListener('click', (e) => {
            windows.forEach(window => {
                window.style.display = 'none';
            });    

            modal.style.display = "none";
            // document.body.classList.remove('modal-open');
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) =>{
            if(e.target === modal && closeClickOverlay){
                windows.forEach(window => {
                    window.style.display = 'none';
                }); 

                modal.style.display = "none";               
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal]').forEach(
                item => {
                    if(getComputedStyle(item).display !== 'none'){
                        display = "block";
                    }
            });
            if(!display) {
                document.querySelector(selector).style.display = "block";
                document.body.style.overflow = "hidden";
            } 
        },time);
    }

    function calcScroll () {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    };

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

    showModalByTime('.popup-consultation', 60000);
};

export default modals;