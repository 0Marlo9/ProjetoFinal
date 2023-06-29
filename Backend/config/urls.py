from django.contrib import admin
from django.urls import path, include
from escola.views import AlunoViewSet

from escola.views import PostagemViewSet
from escola.views import UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'alunos',AlunoViewSet)
router.register(r'postagem',PostagemViewSet)
router.register(r'usuarios',UserViewSet)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
