from rest_framework import viewsets
from escola.models import Aluno
from escola.serializer import AlunoSerializer

from escola.models import Postagem
from escola.serializer import PostagemSerializer

from escola.models import User
from escola.serializer import UserSerializer

class AlunoViewSet (viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

class PostagemViewSet (viewsets.ModelViewSet):
    queryset = Postagem.objects.all()
    serializer_class = PostagemSerializer

class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



