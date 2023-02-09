
var canvas;
var gl;

var points = [];

var numTimesToSubdivide =0;

function init()
{
    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }
        
    
    //  Initialize our data for the Sierpinski Gasket
    
  
   //// -----------------------------------------
   //// Especificar los vertices del  
   //// triangulo utilizando vec2
   //// en las coordenadas: 
   //// (-1,-1) (0,1) y (1,-1) 
   //// -----------------------------------------




  
    //// ---------------------------
    //// Llamada del programa de la funcion para dividir triangulo
    //// especificando los tres vertices
    //// y la variable que indica el numero de veces para subdivision
    //// ---------------------------





    //
    //  Configure WebGL
    //
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    //  Load shaders and initialize attribute buffers
    
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Load the data into the GPU
    
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, 8*Math.pow(3, 6), gl.STATIC_DRAW );
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, flatten(points));

    // Associate out shader variables with our data buffer
    
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );
    
    //// ---------------------------
    //// Agregar el slider en el programa
    //// y enlazarlo con la variable que indica el numero 
    //// de veces en que se haran subdivisiones del triangulo
    //// ---------------------------  





    render();
};

//// ---------------------------
//// Crear la funcion triangulo
//// la cual permita almacenar los
//// tres vertices en la inicializacion
//// ---------------------------




//// ---------------------------
//// Generar la funcion Dividir triangulo
//// En vez de utilizar el operador suma
//// utiliza la funcion mix
//// ---------------------------


window.onload = init;

function render()
{
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.TRIANGLES, 0, points.length );
    points = [];
  
  ////---------------------------------------
  //// Informar al navegador que se ejecutara una animacion,
  //// Solicitando con requestAnimFrame() para repintar la ventana
  //// en el proximo ciclo de animacion
  ////---------------------------------------
    



}

