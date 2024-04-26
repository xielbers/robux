document.addEventListener("DOMContentLoaded", function() {
    const robuxInput = document.querySelector('input[type="number"]');
    const output70 = document.querySelector('b:nth-of-type(1)');
    const output30 = document.querySelector('b:nth-of-type(2)');

    robuxInput.addEventListener('input', function() {
        const robux = parseInt(robuxInput.value);
        const percent70 = Math.floor(robux * 0.7);
        const percent30 = Math.floor(robux * 0.3);

        output70.textContent = `70%: ${percent70}`;
        output30.textContent = `30%: ${percent30}`;
    });
});
