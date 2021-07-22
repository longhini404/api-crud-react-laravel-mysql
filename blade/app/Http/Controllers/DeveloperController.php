<?php


namespace App\Http\Controllers;

use App\Models\Developer;
use Illuminate\Http\Request;

class DeveloperController extends Controller
{
    public function index()
    {
        $developers = Developer::all();
        return view('developers.index', compact('developers'));
    }

    public function create()
    {
        return view('developers.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required',
            'sexo' => 'required',
            'idade' => 'required',
            'hobby' => 'required',
            'datanascimento' => 'required',
        ]);
        $developer = new Developer([
            'nome' => $request->get('nome'),
            'sexo' => $request->get('sexo'),
            'idade' => $request->get('idade'),
            'hobby' => $request->get('hobby'),
            'datanascimento' => $request->get('datanascimento')
        ]);
        $developer->save();
        return redirect('/developers')->with('success', 'Desenvolvedor Cadastrado!');
    }

    public function show(Developer $developer)
    {
        return $developer;
    }

    public function edit($id)
    {
        $developer = Developer::find($id);
        return view('developers.edit', compact('developer'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nome' => 'required',
            'sexo' => 'required',
            'idade' => 'required',
            'hobby' => 'required',
            'datanascimento' => 'required',
        ]);

        $developer = Developer::find($id);
        $developer->nome =  $request->get('nome');
        $developer->sexo = $request->get('sexo');
        $developer->idade = $request->get('idade');
        $developer->hobby = $request->get('hobby');
        $developer->datanascimento = $request->get('datanascimento');
        $developer->save();

        return redirect('/developers')->with('success', 'Desenvolvedor Atualizado!');
    }

    public function destroy($id)
    {
        $developer = Developer::find($id);
        $developer->delete();

        return redirect('/developers')->with('success', 'Desenvolvedor Deletado!');
    }
}
