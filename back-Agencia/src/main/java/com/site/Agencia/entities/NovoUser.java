package com.site.Agencia.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



@Entity
@Table(name="Users")

public class NovoUser implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="Id_NovoUser")
	private Long Id_NovoUser;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="cpf")
	private String cpf;
	
	@Column(name="email")
	private String email;
	
	
	 //FK edição

	@ManyToOne
	@JoinColumn(name = "Id_DestinoUser")	
	private DestinoUser destinouser;
	    
	//private List<DestinoUser> destinos = new ArrayList<DestinoUser>();




	public void setDestinouser(DestinoUser destinouser) {
		this.destinouser = destinouser;
	}

	public NovoUser() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId_NovoUser() {
		return Id_NovoUser;
	}

	public void setId_NovoUser(Long Id_NovoUser) {
		this.Id_NovoUser = Id_NovoUser;
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

	
	public DestinoUser getDestinouser() {
		return destinouser;
	}

	

	public NovoUser(Long Id_NovoUser, String nome, String cPF, String email , DestinoUser destinouser
			) {
		super();
		this.Id_NovoUser = Id_NovoUser;
		this.nome = nome;
		this.cpf = cPF;
		this.email = email;
		this.destinouser = destinouser;
	}
	
	
	@Override
	public int hashCode() {
		return Objects.hash(Id_NovoUser);
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
		return Objects.equals(Id_NovoUser, other.Id_NovoUser);
	}
	
	
	
	
	
	
	

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


	
	
	}




