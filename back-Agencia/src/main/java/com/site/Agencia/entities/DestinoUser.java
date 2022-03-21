package com.site.Agencia.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity

public class DestinoUser implements  Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	
	@Column(name="Id_DestinoUser")
	private Long Id_Destino;
	
	@Column(name="Pais")
	private String Pais;
	
	@Column(name="Cidade")
	private String Cidade;
	
	@Column(name="DataSaida")
	private String DataSaida;
	
	@Column(name="Datachegada")	
	private String DataChegada;
	

	
	@JsonIgnore
	@OneToMany(mappedBy = "destinouser")
	private List<NovoUser> users= new ArrayList<NovoUser>();
	
    
    
    
	public DestinoUser() {
		super();
		
	}

	public DestinoUser(Long id_Destino, String pais, String cidade, String dataSaida, String dataChegada
			) {
		super();
		this.Id_Destino = id_Destino;
		this.Pais = pais;
		this.Cidade = cidade;
		this.DataSaida = dataSaida;
		this.DataChegada = dataChegada;
	}


	public Long getId_Destino() {
		return Id_Destino;
	}


	public void setId_Destino(Long Id_Destino) {
		this.Id_Destino = Id_Destino;
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
	
	
	public List<NovoUser> getUsers() {
		return users;
	}

	@Override
	public int hashCode() {
		return Objects.hash(Id_Destino);
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
		return Id_Destino == other.Id_Destino;
	}




}
