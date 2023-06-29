from django.contrib import admin
from escola.models import Aluno
from escola.models import Postagem
from escola.models import User

class Alunos(admin.ModelAdmin):
    list_display = ('id', 'nome', 'cpf', 'email')
    list_display_links = ('id', 'nome')
    search_fields = ('nome', 'cpf',)


admin.site.register(Aluno, Alunos)

class PostagemAdmin(admin.ModelAdmin):
    list_display = ('id','nome','bairro', 'topico', 'problematica',)
    list_display_links = ('id', 'nome','bairro',)
    search_fields = ('nome', 'bairro', 'topico',)


admin.site.register(Postagem, PostagemAdmin)

class UserAdmin(admin.ModelAdmin):
    list_display = ('id','usuario','email', 'senha',)
    list_display_links = ('id', 'usuario','email',)
    search_fields = ('usuario', 'email', )


admin.site.register(User, UserAdmin)
