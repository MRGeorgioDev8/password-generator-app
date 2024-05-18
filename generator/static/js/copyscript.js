document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copyButton');
    const passwordElement = document.getElementById('password');

    tippy(copyButton, {
        content: 'Скопировать',
        trigger: 'mouseenter',
        placement: 'top',
        delay: [200, 0],
    });

    copyButton.addEventListener('click', () => {

        const range = document.createRange();
        range.selectNode(passwordElement);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand('copy');

        window.getSelection().removeAllRanges();

        tippy(copyButton, {
            content: 'Скопировано',
            trigger: 'manual',
            placement: 'top',
            duration: 600,
        }).show();
    });
});