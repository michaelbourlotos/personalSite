const currentTheme = localStorage.getItem('theme');
const icon = document.querySelector('.theme__icon');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function test(){
    console.log("icon");
    if(localStorage.getItem('theme') === 'dark'){
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }else{
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

icon.addEventListener('click', test);

