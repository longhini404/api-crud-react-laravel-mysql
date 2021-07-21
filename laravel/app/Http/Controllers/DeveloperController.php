<?php


namespace App\Http\Controllers;

use App\Models\Developer;
use Illuminate\Http\Request;

class DeveloperController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $developers = Developer::all();
        return response()->json($developers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required',
            'sexo' => 'required',
            'idade' => 'required',
            'hobby' => 'required',
            'datanascimento' => 'required',
        ]);
        $developer = Developer::create($request->all());
        return response()->json([
            'message' => 'developer created',
            'developer' => $developer
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Developer $developer)
    {
        return $developer;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Developer $developer)
    {
        $request->validate([
            'nome' => 'required',
            'sexo' => 'required',
            'idade' => 'required',
            'hobby' => 'required',
            'datanascimento' => 'required',
        ]);
        $developer->update($request->all());
        return response()->json([
            'message' => 'developer updated!',
            'developer' => $developer
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Developer $developer)
    {
        $developer->delete();
        return response()->json([
            'message' => 'developer deleted'
        ]);
    }
}
