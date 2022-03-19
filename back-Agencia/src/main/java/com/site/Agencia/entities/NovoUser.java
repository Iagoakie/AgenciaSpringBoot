package com.site.Agencia.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;



import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="Users")

public class NovoUser implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="Id")
	private Long Id;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="cpf")
	private String cpf;
	
	@Column(name="email")
	private String email;
	
	@JsonIgnore
	@OneToMany(mappedBy = "novouser")
	
	private List<DestinoUser> destinos;
	
	//private List<DestinoUser> destinos = new ArrayList<DestinoUser>();




	public NovoUser() {
		super();
		// TODO Auto-generated constructor stub
	}


	public List<DestinoUser> getDestinos() {
		return destinos;
	}


	public void setDestinos(List<DestinoUser> destinos) {
		this.destinos = destinos;
	}


	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public NovoUser(Long id, String nome, String cPF, String email 
			) {
		super();
		this.Id = id;
		this.nome = nome;
		this.cpf = cPF;
		this.email = email;
	}
	 //FK edição

	

	//private String DestinoUserId_Destino;
  // private DestinoUser DestinoUser;


	//public String getDestinoUserId_Destino() {
	//	return DestinoUserId_Destino;
	//}

//	public void setDestinoUserId_Destino(String destinoUserId_Destino) {
	//	DestinoUserId_Destino = destinoUserId_Destino;
	//}

	//public DestinoUser getDestinoUser() {
	//	return DestinoUser;
//	}

	@Override
	public int hashCode() {
		return Objects.hash(Id, cpf, destinos, email, nome);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		NovoUser other = (NovoUser) obj;
		return Objects.equals(Id, other.Id) && Objects.equals(cpf, other.cpf)
				&& Objects.equals(destinos, other.destinos) && Objects.equals(email, other.email)
				&& Objects.equals(nome, other.nome);
	}

	
	}




