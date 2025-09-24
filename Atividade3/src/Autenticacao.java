// Questão 10
public class Autenticacao {
    private String usuario;
    private String senha;

    public Autenticacao(String usuario, String senha) {
        this.usuario = usuario;
        this.senha = senha;
    }

    public boolean ehValido(){
        return this.usuario.equals("admin") && this.senha.equals("1234");
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
