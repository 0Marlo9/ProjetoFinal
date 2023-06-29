from rest_framework import serializers
from escola.models import Aluno
from escola.models import Postagem
from escola.models import User

class AlunoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = ('id','nome','cpf', 'email',)


class PostagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Postagem
        fields = ('id','nome','bairro', 'topico', 'problematica')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','usuario','email', 'senha')