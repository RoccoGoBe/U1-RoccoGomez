var gl;
var points;

//// ---------------------------
//// Colocar una variable global para un 
//// numero de puntos que realice 500 iteraciones
//// ---------------------------



window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }



//// ---------------------------
//// Usar funciones de vertices inicializando 
//// las esquinas del triÃ¡ngulo en las posiciones iniciales  con vec2(),
//// ---------------------------



//// ---------------------------
//// Especificar el punto de inicio para el punto p. 
//// Para las iteraciones p deberÃ¡ estar dentro del conjunto de vÃ©rtices
//// ---------------------------




//// ---------------------------
//// Actualizar los puntos iniciales a un vector de puntos
//// ---------------------------



//// ---------------------------
//// Calcular los nuevos puntos. 
//// Cada punto estara localizado en la mitad entre el ultimo 
//// punto y un punto nuevo elegido aleatoriamente usando Math.random()
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
    gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    render();
};


function render() {
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.POINTS, 0, points.length );
}
