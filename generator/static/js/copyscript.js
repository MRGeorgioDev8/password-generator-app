document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copyButton');
    const passwordElement = document.getElementById('password');

    copyButton.addEventListener('click', () => {
        const range = document.createRange();
        range.selectNode(passwordElement);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    });
});
