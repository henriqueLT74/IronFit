package com.ironfit.backend.domain.treino;

public class Exercicio {
    private String nome;
    private int series;
    private int repeticoes;
    private String carga;
    private String observacao;

    public Exercicio() {}

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public int getSeries() { return series; }
    public void setSeries(int series) { this.series = series; }

    public int getRepeticoes() { return repeticoes; }
    public void setRepeticoes(int repeticoes) { this.repeticoes = repeticoes; }

    public String getCarga() { return carga; }
    public void setCarga(String carga) { this.carga = carga; }

    public String getObservacao() { return observacao; }
    public void setObservacao(String observacao) { this.observacao = observacao; }
}