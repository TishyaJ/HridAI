// Simulate the data from the notebook
function generateSpikes() {
    const data = [];
    for (let i = 0; i < 100; i++) {
        const signal = Math.random();
        data.push(signal > 0.8 ? 1 : 0);
    }
    return data;
}

function generateDecisions(spikes) {
    let v = 0;
    const threshold = 1.0;
    const decisions = [];

    for (const spike of spikes) {
        v += spike * 0.5;  // signal accumulation
        v *= 0.9;          // leakage
        decisions.push(v > threshold ? 1 : 0);
        if (v > threshold) {
            v = 0;         // reset after activation
        }
    }
    return decisions;
}

// Create charts
function createChart(canvasId, data, label, color) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;

    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const dataWidth = width - 2 * padding;
    const dataHeight = height - 2 * padding;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw axes
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw labels
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '14px Inter';
    ctx.textAlign = 'center';
    ctx.fillText('Time', width / 2, height - 10);

    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(label, 0, 0);
    ctx.restore();

    // Draw data
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();

    const stepWidth = dataWidth / data.length;

    for (let i = 0; i < data.length; i++) {
        const x = padding + i * stepWidth;
        const y = height - padding - (data[i] * dataHeight);

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }

        // Step-post style
        if (i < data.length - 1) {
            const nextX = padding + (i + 1) * stepWidth;
            ctx.lineTo(nextX, y);
        }
    }

    ctx.stroke();

    // Draw grid
    ctx.strokeStyle = 'rgba(203, 213, 225, 0.1)';
    ctx.lineWidth = 1;

    for (let i = 0; i <= 5; i++) {
        const y = padding + (i * dataHeight / 5);
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
}

// Initialize charts when page loads
window.addEventListener('load', () => {
    const spikes = generateSpikes();
    const decisions = generateDecisions(spikes);

    createChart('spikesChart', spikes, 'Signal Event', '#6366f1');
    createChart('decisionsChart', decisions, 'Cell Activation', '#ec4899');
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Redraw charts on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const spikes = generateSpikes();
        const decisions = generateDecisions(spikes);
        createChart('spikesChart', spikes, 'Signal Event', '#6366f1');
        createChart('decisionsChart', decisions, 'Cell Activation', '#ec4899');
    }, 250);
});
