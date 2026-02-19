import './styles/style.scss';

function init(){
    const fieldRef = document.getElementById('field');
    if (fieldRef){
        fieldRef.addEventListener('click', event => {
            const card = (event.target as HTMLElement).closest('.card') as HTMLButtonElement;
            if (card){
                card.classList.toggle('flipped');
            }
        });     
    }
}

init();
