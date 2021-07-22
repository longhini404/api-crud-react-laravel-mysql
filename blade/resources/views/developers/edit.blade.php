@extends('base')
@section('main')
<div class="row">
    <div class="col-sm-8 offset-sm-2">
        <h1 class="display-3">Atualizar Desenvolvedor</h1>
        @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        <br />
        @endif
        <form method="post" action="{{ route('developers.update', $developer->id) }}">
            @method('PATCH')
            @csrf
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input type="text" class="form-control" name="nome" value={{ $developer->nome }} />
            </div>
            <label for="sexo">Sexo:</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="M" name="sexo" id="flexRadioDefault1" <?php if ($developer->sexo === "M") {
                                                                                                                echo "checked";
                                                                                                            } ?>>
                <label class="form-check-label" for="flexRadioDefault1">
                    Masculino
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="F" name="sexo" id="flexRadioDefault2" <?php if ($developer->sexo === "F") {
                                                                                                                echo "checked";
                                                                                                            } ?>>
                <label class="form-check-label" for="flexRadioDefault2">
                    Feminino
                </label>
            </div>
            <div class="form-group">
                <label for="idade">Idade:</label>
                <input type="number" min="1" max="100" class="form-control" name="idade" value={{ $developer->idade }} />
            </div>
            <div class="form-group">
                <label for="hobby">Hobby:</label>
                <input type="text" class="form-control" name="hobby" value={{ $developer->hobby }} />
            </div>
            <div class="form-group">
                <label for="datanascimento">Data de nascimento:</label>
                <input type="date" class="form-control" name="datanascimento" value={{ $developer->datanascimento }} />
            </div>
            <button type="submit" class="btn btn-primary my-2">Atualizar Desenvolvedor</button>
        </form>
    </div>
</div>
@endsection