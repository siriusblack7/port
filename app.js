let scene;
let camera;
let renderer;


function main()
{
    const canvas = document.querySelector('#c');


    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true,});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.autoClear = false;
    renderer.setClearColor(0x00000, 0.0);



    const earthgeometry = new THREE.SphereGeometry(0.6,32,32);

    const eatrhmaterial = new THREE.MeshPhongMaterial({
        roughness : 1,
        metalness:0,
        map: THREE.ImageUtils.loadTexture('texture/map4.jpg'),
        bumpScale: 0.3,
    });

    const earthmesh = new THREE.Mesh(earthgeometry,eatrhmaterial);

    scene.add(earthmesh);


    const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientlight);


    const pointerlight =  new THREE.PointLight(0xffffff,0.9);

    // ganateba

    pointerlight.position.set(5,3,5);
    scene.add(pointerlight);

    // varskvlavebi

    const stargeometry =  new THREE.SphereGeometry(80,64,64);

    const starmaterial = new THREE.MeshBasicMaterial({

        map: THREE.ImageUtils.loadTexture('texture/galaxy.png'),
        side: THREE.BackSide
    });

    const starmesh = new THREE.Mesh(stargeometry,starmaterial);

    scene.add(starmesh);

    const animate = () =>{
        requestAnimationFrame(animate);
        earthmesh.rotation.y -= 0.0015;
        starmesh.rotation.y += 0.0005;

        render();
    }

    const render = () => {
        renderer.render(scene,camera);
    }

    animate();
}

window.onload = main;
