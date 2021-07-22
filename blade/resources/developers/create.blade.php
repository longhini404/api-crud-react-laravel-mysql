@extends('base')

@section('main')
<div class="row">
    <div class="col-sm-8 offset-sm-2">
        <h1 class="display-3">Cadastrar Desenvolvedor</h1>
        <div>
            @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif
            <form method="post" action="{{ route('developers.store') }}">
                @csrf
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" class="form-control" name="nome" />
                </div>
                <label for="sexo">Sexo:</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="M" name="sexo" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Masculino
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="F" name="sexo" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                        Feminino
                    </label>
                </div>
                <div class="form-group">
                    <label for="idade">Idade:</label>
                    <input type="number" min="1" max="100" class="form-control" name="idade" />
                </div>
                <div class="form-group">
                    <label for="hobby">Hobby:</label>
                    <input type="text" class="form-control" name="hobby" />
                </div>
                <div class="form-group">
                    <label for="datanascimento">Data de Nascimento:</label>
                    <input type="date" class="form-control" name="datanascimento" />
                </div>
                <button type="submit" class="btn btn-primary my-2">Cadastrar Desenvolvedor</button>
            </form>
        </div>
    </div>
</div>
@endsection