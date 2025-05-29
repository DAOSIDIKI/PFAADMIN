from django.contrib import admin
from server1.models import Utilisateur
class DetailsAdmin(admin.ModelAdmin):
    pass

admin.site.register(Utilisateur,DetailsAdmin)