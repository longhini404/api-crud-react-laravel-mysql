@extends('base')

@section('main')
<div class="row">
    <div class="col-sm-12">
        @if(session()->get('success'))
        <div class="alert alert-success">
            {{ session()->get('success') }}
        </div>
        @endif
        <h1 class="display-3">Desenvolvedores</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>Sexo</td>
                    <td>Idade</td>
                    <td>Hobby</td>
                    <td>Data de Nascimento</td>
                    <td colspan=2>Ações</td>
                </tr>
            </thead>
            <tbody>
                @foreach($developers as $developer)
                <tr>
                    <td>{{$developer->nome}}</td>
                    <td>{{$developer->sexo}}</td>
                    <td>{{$developer->idade}}</td>
                    <td>{{$developer->hobby}}</td>
                    <td>{{$developer->datanascimento}}</td>
                    <td>
                        <a href="{{ route('developers.edit',$developer->id)}}" class="btn btn-info">Atualizar Desenvolvedor</a>
                    </td>
                    <td>
                        <form action="{{ route('developers.destroy', $developer->id)}}" method="post">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-danger" type="submit">Deletar</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <div>
            <a href="{{ route('developers.create')}}" class="btn btn-primary">Cadastrar Desenvolvedor</a>
        </div>
    </div>
</div>
@endsection