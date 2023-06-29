from django.db import models

class Aluno(models.Model):
    nome = models.CharField(max_length=100)
    cpf = models.BigIntegerField(max_length=9)
    email =  models.EmailField(max_length=100)

    def __str__ (self):
        return self.nome


class Postagem(models.Model):
    nome = models.CharField(max_length=100)
    bairro = models.CharField(max_length=50)
    topico = models.CharField(max_length=100)
    problematica = models.TextField()

    def __str__ (self):
        return self.nome

class User(models.Model):
    usuario = models.CharField(max_length=50)
    email =  models.EmailField(max_length=100)
    senha = models.BigIntegerField(max_length=20)
    

    def __str__ (self):
        return self.usuario