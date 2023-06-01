// Side bar============

const manuItems = document.querySelectorAll('.menu-item');

// removeSelect=======
const removeSelect = () => {
    manuItems.forEach(item => {
        item.classList.remove('active');
    })
}


// 
manuItems.forEach(item => {
    item.addEventListener('click', () => {
        removeSelect();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


// Meassage ============
// Meassage ============
const msgManu = document.querySelector('#messages-notifications');
const msgBox = document.querySelector('.messages');


msgManu.addEventListener('click', () => {
    msgBox.style.boxShadow = '0 0 1rem var(--color-primary)';
    document.querySelector('#messages-notifications .notification-count').style.display = 'none';

    setTimeout(() => {
        msgBox.style.boxShadow = 'none'
    }, 2000);
})

// Meassage ============
// Meassage ============
const msg = document.querySelectorAll('.message');
const searchBox = document.querySelector('#message-search');

const searchMessage = () => {
    const val = searchBox.value.toLowerCase();

    msg.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();

        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}


searchBox.addEventListener('keyup', searchMessage);


// Theme ============
// Theme ============
const themeManu = document.querySelector('#theme');
const themeBox = document.querySelector('.customize-theme');


// Open Modal
const openThemeModal = () => {
    themeBox.style.display = 'grid';
}

themeManu.addEventListener('click', openThemeModal);

// Close Modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeBox.style.display = 'none';
    }
}

themeBox.addEventListener('click', closeThemeModal);



// fontSize change ==========
// fontSize change ==========
const fontSize = document.querySelectorAll('.choose-size span');

const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size => {
   
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
        }

        //change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})


// Color Plate ==========
// Color Plate ==========
var root = document.querySelector(':root');
const colorPlate = document.querySelectorAll('.choose-color span');

// Remove active class from color
const changeActiveColorClass = () => {
    colorPlate.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Change Primary color
colorPlate.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
           primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        } 

        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// Background Color ==========
// Background Color ==========
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


// Theme Background Values
let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

// Change Background Color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}


bg1.addEventListener('click', () => {
    
    // Add Active Class
    bg1.classList.add('active');

    // Remove Active Class from the others
    bg2.classList.remove('active');
    bg3.classList.remove('active');

    // Remove customized changes from local storage
    window.location.reload();
});


bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // Add Active Class
    bg2.classList.add('active');

    // Remove Active Class from the others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
});


bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // Add Active Class
    bg3.classList.add('active');

    // Remove Active Class from the others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
});