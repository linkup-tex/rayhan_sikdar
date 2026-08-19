// THREE.JS 3D Particle Universe Background
const canvas = document.getElementById('bg-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Particle Geometry
const geometry = new THREE.BufferGeometry();
const count = 1500;
const positions = new Float32Array(count * 3);

for(let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Cyan Neon Particle Material
const material = new THREE.PointsMaterial({
    size: 0.015,
    color: 0x00f0ff
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 3;

// Mouse Interaction Effect
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
});

// Render Loop
function animate() {
    requestAnimationFrame(animate);
    
    particles.rotation.y += 0.001;
    particles.rotation.x += 0.001;

    particles.rotation.y += mouseX * 0.05;
    particles.rotation.x += mouseY * 0.05;

    renderer.render(scene, camera);
}

animate();

// Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
