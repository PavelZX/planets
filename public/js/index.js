class Planet {

    putPlanet(nameId, pathPlanet) { 
        let planet = document.getElementById(nameId);

        var scene = new THREE.Scene()
        scene.background = new THREE.Color('#3b4252');

        var camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth/window.innerHeight
        );
        
        var renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(700, 600);
        
        
        planet.appendChild( renderer.domElement );
        
        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
        var cube = new THREE.Mesh(geometry, material);
        
        scene.add(cube);
        
        camera.position.z = 5;
        let loader = new THREE.GLTFLoader();
        loader.load('scene.glft', function(gltf) { 
            scene.add(gltf.scene);
            renderer.render(s)
            renderer.render(scene,camera);
        })

        var animate = function() { 
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        
            //renderer.render(scene,camera);
        }
        
        //animate();
    }

}

let earth = new Planet();
earth.putPlanet('earth', './asda')