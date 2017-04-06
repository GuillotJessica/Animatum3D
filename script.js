window.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('renderCanvas');
  var engine = new BABYLON.Engine(canvas, true);
  var createScene = function() {
      // create a basic BJS Scene object
      var scene = new BABYLON.Scene(engine);

      // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
   var camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);

      // target the camera to scene origin
      camera.setTarget(BABYLON.Vector3.Zero());

      // attach the camera to the canvas
      camera.attachControl(canvas, false);

      // create a basic light, aiming 0,1,0 - meaning, to the sky
      var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

      // create a built-in "sphere" shape; its constructor takes 4 params: name, subdivisions, radius, scene
      var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);

    //  BABYLON.SceneLoader.ImportMesh("", "assets/", "Rabbit.babylon", scene, function (newMeshes) {
       // Set the target of the camera to the first imported mesh
    //   camera.target = newMeshes[0];
   //});

      // move the sphere upward 1/2 of its height
      sphere.position.y = 1;

      // create a built-in "ground" shape; its constructor takes 5 params: name, width, height, subdivisions and scene
      var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

      // return the created scene
      return scene;
  }
  var scene = createScene();
  engine.runRenderLoop(function() {
      scene.render();
  });
  window.addEventListener('resize', function() {
    engine.resize();
});
   });
