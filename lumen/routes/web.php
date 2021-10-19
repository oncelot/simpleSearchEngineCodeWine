<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->post('/api', function (Request $request) {
//dd($request->json('filtro'));
    if(empty($request->json('filtro'))  ){
        $risultato = DB::table('vinocodice')->
        Where('regione','like','%' .$request->json('regioni'). '%')->get();
    }
    if(empty($request->json('regioni'))  ){ 
         $risultato = DB::table('vinocodice')->
        where('codicevino','like','%' . $request->json('filtro'). '%')->
        orWhere('descrizione','like','%' .$request->json('filtro'). '%')
        ->get();
    }
    if(!empty($request->json('regioni')) && !empty($request->json('filtro')) ){

        $risultato = DB::table('vinocodice')->
        orwhere('codicevino','like','%' . $request->json('filtro'). '%')->
        orWhere('descrizione','like','%' .$request->json('filtro'). '%')->
        Where('regione','like','%' .$request->json('regioni'). '%')->get();
    }
    
    return response()->json($risultato);
});