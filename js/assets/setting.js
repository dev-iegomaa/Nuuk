window.addEventListener('load', function () {

    const localColor = this.window.localStorage.getItem('color') ?? '#ec1c23';


    const setting = this.document.getElementById('setting');
    const settingSpan = this.document.querySelector('#setting span');
    const settingIcon = this.document.querySelector('#setting i');

    settingSpan.addEventListener('click', function () {
        settingIcon.classList.toggle('fa-spin');
        setting.classList.toggle('show');
    });

    const items = this.document.querySelectorAll('#setting li');

    items.forEach(li => {
        if (li.getAttribute('data-color') === localColor) {
            li.classList.add('active');
        }
    });

    document.documentElement.style.setProperty('--secondary-color', localColor);

    items.forEach(li => {
        li.style.backgroundColor = li.getAttribute('data-color');
        li.addEventListener('click', function () {
            items.forEach(li => {
                li.classList.remove('active');
            });
            this.classList.add('active');

            document.documentElement.style.setProperty('--secondary-color', this.getAttribute('data-color'));
            window.localStorage.setItem('color', this.getAttribute('data-color'));

            // document.styleSheets[5].cssRules[0].style.setProperty('--secondary-color', this.getAttribute('data-color'));
        });
    });
});