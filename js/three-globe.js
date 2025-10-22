// Three.js Globe Animation
class ThreeGlobe {
    constructor(container) {
        this.container = container;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.globe = null;
        this.stars = null;
        this.init();
    }

    init() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x1a0028, 1, 1000);

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.z = 5;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // Create Globe
        this.createGlobe();

        // Create Stars
        this.createStars();

        // Lights
        const ambientLight = new THREE.AmbientLight(0xa855f7, 0.5);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x25003a, 1);
        pointLight.position.set(5, 3, 5);
        this.scene.add(pointLight);

        // Handle Resize
        window.addEventListener('resize', () => this.onWindowResize());

        // Start Animation
        this.animate();
    }

    createGlobe() {
        // Wireframe Sphere (Earth)
        const geometry = new THREE.SphereGeometry(2, 32, 32);

        // Wireframe material
        const material = new THREE.MeshPhongMaterial({
            color: 0x25003a,
            wireframe: true,
            transparent: true,
            opacity: 0.6,
            emissive: 0xa855f7,
            emissiveIntensity: 0.2
        });

        this.globe = new THREE.Mesh(geometry, material);
        this.scene.add(this.globe);

        // Add inner glow sphere
        const glowGeometry = new THREE.SphereGeometry(1.95, 32, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0xa855f7,
            transparent: true,
            opacity: 0.1,
            side: THREE.BackSide
        });
        const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
        this.globe.add(glowSphere);

        // Add dots (points) on globe
        this.createGlobePoints();
    }

    createGlobePoints() {
        const pointsGeometry = new THREE.BufferGeometry();
        const pointsCount = 1000;
        const positions = new Float32Array(pointsCount * 3);

        for (let i = 0; i < pointsCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const radius = 2.01;

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
        }

        pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const pointsMaterial = new THREE.PointsMaterial({
            color: 0xa855f7,
            size: 0.05,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true
        });

        const points = new THREE.Points(pointsGeometry, pointsMaterial);
        this.globe.add(points);
    }

    createStars() {
        const starsGeometry = new THREE.BufferGeometry();
        const starCount = 2000;
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1,
            transparent: true,
            opacity: 0.8
        });

        this.stars = new THREE.Points(starsGeometry, starsMaterial);
        this.scene.add(this.stars);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Rotate globe slowly
        if (this.globe) {
            this.globe.rotation.y += 0.001;
            this.globe.rotation.x += 0.0005;
        }

        // Rotate stars very slowly
        if (this.stars) {
            this.stars.rotation.y += 0.0001;
        }

        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    destroy() {
        if (this.renderer) {
            this.renderer.dispose();
            if (this.container.contains(this.renderer.domElement)) {
                this.container.removeChild(this.renderer.domElement);
            }
        }
    }
}

// Initialize globe when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const globeContainer = document.getElementById('globe-container');
    if (globeContainer) {
        new ThreeGlobe(globeContainer);
    }
});
