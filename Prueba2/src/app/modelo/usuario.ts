export interface Usuario {
  firstName: string;
  lastName: string;
  age: number;
  username: string;
  password: string;
  birthDate: number;
  gender: string;
}

export interface UsuarioI extends Usuario {
  id: number;
}

export interface UsuarioParcial extends Partial<Usuario>{

}
