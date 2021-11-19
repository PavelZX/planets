import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
class Planet {

    putPlanet(nameId, pathPlanet) { 
        let planet = document.getElementById(nameId);

        var scene = new THREE.Scene()
        scene.background = new THREE.Color('#3b4252');
        //scene.fog = new THREE.Fog(0x76456c, 0.1, 8)

        var camera = new THREE.PerspectiveCamera(
            30,
            window.innerWidth/window.innerHeight
        );
        let hlight = new THREE.AmbientLight (0x303030,60);

        scene.add(hlight);
        var renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(900, 500);
        
        
        planet.appendChild( renderer.domElement );
        
        
        camera.position.z = 5;
        
        let controls = new OrbitControls(camera,renderer.domElement);

        controls.addEventListener('change', renderer);

        
        let loader = new THREE.GLTFLoader();
        loader.load(`${pathPlanet}/scene.gltf`, function(gltf) { 
            scene.add(gltf.scene);

            renderer.render(scene,camera);

            animate();

        })


        function animate() {

            renderer.render(scene,camera);
    
            requestAnimationFrame(animate);
    
        }
    
    }

}

let earth = new Planet();
earth.putPlanet('earth', './earth')

let mars = new Planet();
