package com.site.Agencia.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity

public class DestinoUser implements  Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	
	@Column(name="Id")
	private Long Id;
	
	@Column(name="Pais")
	private String Pais;
	
	@Column(name="Cidade")
	private String Cidade;
	
	@Column(name="DataSaida")
	private String DataSaida;
	
	@Column(name="Datachegada")	
	private String DataChegada;
	

	
    @ManyToOne
	@JoinColumn(name = "Id_novouser")	
	private NovoUser novouser;
    
    
    
    
    
	public NovoUser getNovouser() {
		return novouser;
	}

	public void setNovouser(NovoUser novouser) {
		this.novouser = novouser;
	}

	public DestinoUser() {
		super();
		
	}

	public DestinoUser(Long Id, String pais, String cidade, String dataSaida, String dataChegada
			) {
		super();
		this.Id = Id;
		this.Pais = pais;
		this.Cidade = cidade;
		this.DataSaida = dataSaida;
		this.DataChegada = dataChegada;
	}


	public Long getId() {
		return Id;
	}


	public void setId(Long Id) {
		this.Id = Id;
	}

	public String getPais() {
		return Pais;
	}




	public void setPais(String pais) {
		Pais = pais;
	}



	public String getCidade() {
		return Cidade;
	}




	public void setCidade(String cidade) {
		Cidade = cidade;
	}


	public String getDataSaida() {
		return DataSaida;
	}





	public void setDataSaida(String dataSaida) {
		DataSaida = dataSaida;
	}

	public String getDataChegada() {
		return DataChegada;
	}

	public void setDataChegada(String dataChegada) {
		DataChegada = dataChegada;
	}





	@Override
	public int hashCode() {
		return Objects.hash(Cidade, DataChegada, DataSaida, Id, Pais);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DestinoUser other = (DestinoUser) obj;
		return Objects.equals(Cidade, other.Cidade) && Objects.equals(DataChegada, other.DataChegada)
				&& Objects.equals(DataSaida, other.DataSaida) && Objects.equals(Id, other.Id)
				&& Objects.equals(Pais, other.Pais);
	}


}
