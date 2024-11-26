const loader = new THREE.GLTFLoader();
loader.load('C:/Users/andyf/Desktop/website (1)/earth_on_an_icosahedron_gltf/scene.gltf', function (gltf) {
    scene.add(gltf.scene); // 将模型添加到场景中
    animate(); // 确保加载后继续动画
});
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update(); // 使得控制器保持更新