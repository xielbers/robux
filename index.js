document.addEventListener("DOMContentLoaded", function() {
    const robuxInput = document.querySelector('input[type="number"]');
    const output70 = document.querySelector('b:nth-of-type(1)');
    const output30 = document.querySelector('b:nth-of-type(2)');

    robuxInput.addEventListener('input', function() {
        const robux = parseInt(robuxInput.value);
        const por70 = robux * 0.7;
        const por30 = robux * 0.3;

        const por70r = Math.floor(robux * 0.7);
        const por30r = Math.floor(robux * 0.3);

        output70.textContent = `70%: ${por70r} (${por70.toFixed(3)})`;
        output30.textContent = `30%: ${por30r} (${por30.toFixed(3)})`;
    });
});
